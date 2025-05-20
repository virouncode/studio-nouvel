"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export const SpotifyEmbed = ({ src }: { src: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-[152px]">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col h-[152px] bg-slate-300 p-4 rounded-xl gap-4">
          <Skeleton className="h-20 w-20" />
          <Skeleton className="h-4 w-full" />
        </div>
      )}
      <iframe
        src={src}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className="transition-opacity duration-300"
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
};
