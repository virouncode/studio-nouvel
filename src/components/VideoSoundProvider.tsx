"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create a context to expose the sound control
export const VideoSoundContext = createContext<{
  isMuted: boolean;
  toggleMute: () => void;
}>({
  isMuted: true,
  toggleMute: () => {},
});

export const useVideoSound = () => useContext(VideoSoundContext);

interface VideoSoundProviderProps {
  children: React.ReactNode;
}

const VideoSoundProvider = ({ children }: VideoSoundProviderProps) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    console.log(
      "VideoSoundProvider: toggleMute called, current state:",
      isMuted
    );
    setIsMuted(!isMuted);
    console.log("VideoSoundProvider: new state:", !isMuted);
  };

  // Log when the provider is mounted
  useEffect(() => {
    console.log("VideoSoundProvider mounted, initial mute state:", isMuted);
  }, [isMuted]);

  return (
    <VideoSoundContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </VideoSoundContext.Provider>
  );
};

export default VideoSoundProvider;
