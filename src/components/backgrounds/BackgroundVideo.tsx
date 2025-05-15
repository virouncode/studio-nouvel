// components/BackgroundVideo.tsx
"use client";

import Player from "@vimeo/player";
import { useEffect, useRef } from "react";

type BackgroundVideoProps = {
  videoId: string;
};

export default function BackgroundVideo({ videoId }: BackgroundVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);

    player.setVolume(0);
    player.setLoop(true);
    player.play();

    // Force high quality (will select the best available)
    player.getQualities().then((qualities) => {
      const bestQuality =
        qualities.find((q) => q.label === "4k") ||
        qualities.find((q) => q.label === "1080p") ||
        qualities[0];
      if (bestQuality) {
        player.setQuality(bestQuality.label as Player.VimeoVideoQuality);
      }
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&muted=1&loop=1`}
        className="w-full h-full pointer-events-none"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        title="Bande démo"
      ></iframe>
    </div>
  );
}
