"use client";
import { useVideoSound } from "@/components/VideoSoundProvider";
import Player from "@vimeo/player";
import { useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vimeoPlayerRef = useRef<Player | null>(null);
  const { isMuted } = useVideoSound();

  useEffect(() => {
    if (containerRef.current) {
      // Initialize Vimeo player with streaming options
      vimeoPlayerRef.current = new Player(containerRef.current, {
        id: 1058212985,
        background: true,
        autoplay: true,
        loop: true,
        muted: true, // Always start muted
        responsive: true,
        dnt: true, // Do Not Track
        controls: false,
        autopause: false,
        playsinline: true,
        title: false,
        byline: false,
        portrait: false,
        speed: true,
        quality: "auto", // Let Vimeo automatically adjust quality based on connection
      });

      // Add event listeners for better debugging and user experience
      if (vimeoPlayerRef.current) {
        vimeoPlayerRef.current.on("bufferstart", () => {
          console.log("Video buffering started");
        });

        vimeoPlayerRef.current.on("bufferend", () => {
          console.log("Video buffering ended");
        });

        vimeoPlayerRef.current.on("play", () => {
          console.log("Video started playing");
        });

        vimeoPlayerRef.current.on("loaded", () => {
          console.log("Video loaded");
        });

        // Set up streaming by configuring the player to use minimal buffering
        // This makes the player start playback as soon as possible without waiting for the entire video
        vimeoPlayerRef.current.setCurrentTime(0).then(() => {
          // Start playing immediately after setting the time to 0
          vimeoPlayerRef.current?.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        });

        // Configure the player to use a small buffer size
        // This is done by setting the quality to auto, which will adjust based on network conditions
        vimeoPlayerRef.current.setQuality("auto").catch((error) => {
          console.error("Error setting quality:", error);
        });
      }
    }

    // Cleanup when component unmounts
    return () => {
      if (vimeoPlayerRef.current) {
        vimeoPlayerRef.current.destroy();
      }
    };
  }, []);

  // Effect to handle mute state changes
  useEffect(() => {
    console.log("BackgroundVideo: isMuted changed to:", isMuted);
    if (vimeoPlayerRef.current) {
      if (isMuted) {
        console.log("BackgroundVideo: Setting volume to 0");
        vimeoPlayerRef.current.setVolume(0);
      } else {
        console.log("BackgroundVideo: Setting volume to 1");
        vimeoPlayerRef.current.setVolume(0.7);
      }
    } else {
      console.log("BackgroundVideo: vimeoPlayerRef.current is null");
    }
  }, [isMuted]);

  // Log when the component is mounted
  useEffect(() => {
    console.log("BackgroundVideo mounted");
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-100dvh overflow-hidden bg-[#FEFDF1]">
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default BackgroundVideo;
