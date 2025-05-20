import { Button } from "@/components/ui/button";
import Player from "@vimeo/player";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useState } from "react";

type SoundToggleButtonProps = {
  playerRef: React.RefObject<Player | null>;
  mute: () => void;
  unmute: () => void;
  className?: string;
};

const SoundToggleButton = ({
  playerRef,
  mute,
  unmute,
  className = "",
}: SoundToggleButtonProps) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const checkMuted = async () => {
      if (playerRef.current) {
        const volume = await playerRef.current.getVolume();
        setIsMuted(volume === 0);
      }
    };
    checkMuted();
  }, [playerRef]);

  const toggleMute = () => {
    if (isMuted) {
      unmute();
      setIsMuted(false);
    } else {
      mute();
      setIsMuted(true);
    }
  };

  return (
    <Button
      onClick={toggleMute}
      variant="outline"
      size="icon"
      className={`bg-white hover:bg-white/90 shadow-md ${className}`}
      data-state={isMuted ? "muted" : "unmuted"}
      aria-label={isMuted ? "Unmute" : "Mute"}
      title={isMuted ? "Unmute" : "Mute"}
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
