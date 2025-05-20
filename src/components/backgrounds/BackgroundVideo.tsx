"use client";

import { useVimeo } from "@/hooks/use-vimeo";
import SoundToggleButton from "../../app/[locale]/(home)/SoundToggleButton";

type BackgroundVideoProps = {
  videoId: string;
};

const BackgroundVideo = ({ videoId }: BackgroundVideoProps) => {
  const { iframeRef, playerRef, mute, unmute } = useVimeo();
  return (
    <>
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 aspect-video min-w-full min-h-full -translate-x-1/2 -translate-y-1/2">
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&background=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full pointer-events-none"
          ></iframe>
        </div>
      </div>
      <SoundToggleButton
        playerRef={playerRef}
        mute={mute}
        unmute={unmute}
        className="absolute bottom-8 left-8 z-[100]"
      />
    </>
  );
};

export default BackgroundVideo;
