"use client";

import localFont from "next/font/local";
import { useState } from "react";

type InteractiveTextProps = {
  text: string;
  className?: string;
};

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueLight.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "../../public/fonts/HelveticaNeueMedium.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/HelveticaNeueBlack.otf",
      weight: "800",
      style: "black",
    },
  ],
});

export default function InteractiveText({
  text,
  className = "",
}: InteractiveTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <h2 className={`${className} px-4`}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-colors duration-200   ${
            letter === " " ? "mr-1" : "text-transparent"
          } ${helvetica.className}`}
          style={{
            WebkitTextStroke: letter === " " ? "none" : "1px black",
            color:
              hoveredIndex !== null &&
              Math.abs(index - hoveredIndex) < 3 &&
              letter !== " "
                ? "black"
                : "transparent",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h2>
  );
}
