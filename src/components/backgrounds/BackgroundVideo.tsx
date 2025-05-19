"use client";
import { useVideoSound } from "@/components/VideoSoundProvider";
import Player from "@vimeo/player";
import { useEffect, useRef, useState } from "react";
import styles from "./backgroundVideo.module.css";

const BackgroundVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vimeoPlayerRef = useRef<Player | null>(null);
  const { isMuted } = useVideoSound();
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize player
  useEffect(() => {
    if (!containerRef.current) return;

    // Create the player with explicit dimensions to prevent CLS
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
      // Set explicit dimensions to prevent layout shift
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Set up event listeners
    const player = vimeoPlayerRef.current;

    player.on("loaded", () => {
      console.log("Video loaded");
      setIsLoaded(true);

      // Once loaded, play the video
      player.play().catch((error) => {
        console.error("Error playing video:", error);
      });

      // Apply additional classes once loaded
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector("iframe");
        if (iframe) {
          iframe.classList.add(styles.videoIframe);

          // Apply screen-specific classes
          if (window.innerWidth < 550) {
            iframe.classList.add(styles.videoSmallScreen);
          } else {
            const aspectRatio = window.innerWidth / window.innerHeight;
            if (aspectRatio > 1) {
              iframe.classList.add(styles.videoLandscape);
            } else {
              iframe.classList.add(styles.videoPortrait);
            }
          }
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
      if (!containerRef.current || !isLoaded) return;

      const iframe = containerRef.current.querySelector("iframe");
      if (iframe) {
        // Remove all screen-specific classes first
        iframe.classList.remove(
          styles.videoSmallScreen,
          styles.videoLandscape,
          styles.videoPortrait
        );

        // Apply appropriate class based on screen size
        if (window.innerWidth < 550) {
          iframe.classList.add(styles.videoSmallScreen);
        } else {
          const aspectRatio = window.innerWidth / window.innerHeight;
          if (aspectRatio > 1) {
            iframe.classList.add(styles.videoLandscape);
          } else {
            iframe.classList.add(styles.videoPortrait);
          }
        }

        // No need to update player dimensions as we're using CSS classes
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded]);

  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
      {/* Placeholder to reserve space and prevent CLS */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ width: "100vw", height: "100vh" }}
      />

      <div
        ref={containerRef}
        className={`${styles.videoContainer} absolute inset-0 w-full h-full overflow-hidden`}
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
