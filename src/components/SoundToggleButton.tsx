"use client";

import { useVideoSound } from "@/components/VideoSoundProvider";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const SoundToggleButton = () => {
  const { isMuted, toggleMute } = useVideoSound();

  return (
    <Button
      onClick={() => {
        console.log("Toggle mute clicked, current state:", isMuted);
        toggleMute();
      }}
      variant="outline"
      size="icon"
      className="bg-white hover:bg-white/90 shadow-md"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className="h-6 w-6 text-black" />
      ) : (
        <Volume2 className="h-6 w-6 text-black" />
      )}
    </Button>
  );
};

export default SoundToggleButton;
