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

export const AlbumsContent = () => {
  const spotifyUrls = [
    "https://open.spotify.com/embed/album/1BWlfOYi4WfwUOzsBdjkb1?utm_source=generator",
    "https://open.spotify.com/embed/track/2plJkVTL2FR6Z1R9NfDmDv?utm_source=generator",
    "https://open.spotify.com/embed/album/4jSXmRVS55eMkC9EekheR8?utm_source=generator",
    "https://open.spotify.com/embed/artist/4XC7l6YtemaWPq3hYtF0VS?utm_source=generator",
    "https://open.spotify.com/embed/track/08DqazD0XGA5MjM47bOa19?utm_source=generator",
    "https://open.spotify.com/embed/track/0XECvevwXyOANRT5Y0dNJ4?utm_source=generator",
    "https://open.spotify.com/embed/artist/7ddKeUgDmUyhWEPCAYKuKZ?utm_source=generator",
    "https://open.spotify.com/embed/track/4jyAkHLViLGB4F77gbwqMy?utm_source=generator",
  ];

  return (
    <div className="bg-black min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 container mx-auto sm:px-6">
        {spotifyUrls.map((url, index) => (
          <SpotifyEmbed key={index} src={url} />
        ))}
      </div>
    </div>
  );
};
