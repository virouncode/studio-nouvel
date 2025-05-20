import Player from "@vimeo/player";
import { useEffect, useRef } from "react";

export const useVimeo = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    if (iframeRef.current && !playerRef.current) {
      playerRef.current = new Player(iframeRef.current);
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const mute = () => playerRef.current?.setVolume(0);
  const unmute = () => playerRef.current?.setVolume(0.7);
  return { iframeRef, playerRef, mute, unmute };
};
