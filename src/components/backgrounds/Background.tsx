"use client";
import Image from "next/image";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={"/img/mix_2.webp"}
        alt="image table de mixage"
        className="object-cover"
        quality={100}
        priority
        fill
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/90"></div>
    </div>
  );
};

export default Background;
