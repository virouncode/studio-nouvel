"use client";
import { useVideoSound } from "@/components/VideoSoundProvider";
import Player from "@vimeo/player";
import { useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vimeoPlayerRef = useRef<Player | null>(null);
  const { isMuted } = useVideoSound();

  // Initialize player
  useEffect(() => {
    if (!containerRef.current) return;

    // Create the player with minimal options first
    vimeoPlayerRef.current = new Player(containerRef.current, {
      id: 1058212985,
      background: true,
      autoplay: true,
      loop: true,
      muted: true,
      controls: false,
      responsive: false,
      dnt: true,
      autopause: false,
      playsinline: true,
      title: false,
      byline: false,
      portrait: false,
    });

    // Set up event listeners
    const player = vimeoPlayerRef.current;

    player.on("loaded", () => {
      console.log("Video loaded");

      // Once loaded, play the video
      player.play().catch((error) => {
        console.error("Error playing video:", error);
      });

      // Apply custom styles to the iframe directly
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector("iframe");
        if (iframe) {
          applyIframeStyles(iframe);
        }
      }
    });

    // Cleanup
    return () => {
      if (vimeoPlayerRef.current) {
        vimeoPlayerRef.current.destroy();
      }
    };
  }, []);

  // Function to apply consistent styles to the iframe
  const applyIframeStyles = (iframe: HTMLElement) => {
    // Basic positioning
    iframe.style.position = "absolute";
    iframe.style.top = "50%";
    iframe.style.left = "50%";
    iframe.style.transform = "translate(-50%, -50%)";

    // Always use cover to ensure no background shows
    iframe.style.objectFit = "cover";

    // Get video dimensions from the iframe if possible
    const videoWidth = iframe.clientWidth || window.innerWidth;
    const videoHeight = iframe.clientHeight || window.innerHeight;
    const videoAspect = videoWidth / videoHeight;

    // Get screen dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenAspect = screenWidth / screenHeight;

    // Calculate dimensions to ensure complete coverage
    // We want to make sure the video is always larger than the viewport
    // in both dimensions to avoid any background showing

    if (screenWidth < 550) {
      // Very narrow screens - make it extremely large
      iframe.style.width = "400vw"; // 4x viewport width
      iframe.style.height = "400vh"; // 4x viewport height
      iframe.style.minWidth = "400vw";
      iframe.style.minHeight = "400vh";
    } else if (screenAspect > videoAspect) {
      // Screen is wider than video - prioritize width coverage
      iframe.style.width = "100vw"; // 2x viewport width
      iframe.style.height = "100vh"; // 2x viewport height
      iframe.style.minWidth = "100vw";
      iframe.style.minHeight = "100vh";
    } else {
      // Screen is taller than video - prioritize height coverage
      iframe.style.width = "200vw"; // 2x viewport width
      iframe.style.height = "200vh"; // 2x viewport height
      iframe.style.minWidth = "200vw";
      iframe.style.minHeight = "200vh";
    }
  };

  // Handle mute state changes
  useEffect(() => {
    if (!vimeoPlayerRef.current) return;

    if (isMuted) {
      vimeoPlayerRef.current.setVolume(0);
    } else {
      vimeoPlayerRef.current.setVolume(0.7);
    }
  }, [isMuted]);

  // Handle window resize to ensure video always fills screen
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const iframe = containerRef.current.querySelector("iframe");
      if (iframe) {
        applyIframeStyles(iframe);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default BackgroundVideo;
