"use client";

import InteractiveText from "@/components/InteractiveText";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface EquipmentItemProps {
  src: string;
  alt: string;
  list: string[];
  className?: string;
}

const EquipmentItem = ({
  src,
  alt,
  list,
  className = "",
}: EquipmentItemProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`relative rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ${className}`}
      onClick={() => setIsActive(!isActive)}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div
        className={`absolute inset-0 bg-black bg-opacity-30 md:opacity-0 md:hover:opacity-80 transition-opacity duration-300 flex items-center justify-center flex-col
          ${isActive ? "opacity-80" : "opacity-0"}`}
      >
        <ul className="text-white font-bold text-center px-2 overflow-auto max-h-full list-disc list-inside">
          {list.map((item, index) => (
            <li key={index} className="text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface EquipmentItemWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

const EquipmentItemWithCaption = ({
  src,
  alt,
  caption,
  className = "",
}: EquipmentItemWithCaptionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`relative rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ${className}`}
      onClick={() => setIsActive(!isActive)}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div
        className={`absolute inset-0 bg-black bg-opacity-30 md:opacity-0 md:hover:opacity-80 transition-opacity duration-300 flex items-center justify-center
          ${isActive ? "opacity-80" : "opacity-0"}`}
      >
        <span className="text-white text-xl font-bold">{caption}</span>
      </div>
    </div>
  );
};

interface EquipmentSectionProps {
  title: string;
}

const EquipmentSection = ({ title }: EquipmentSectionProps) => {
  const consoleItems = [
    "UAD Apollo 2 DUO",
    "UAD ApolloTWIN",
    "UAD SatellitE QUAD",
    "UAD 6176 PREAMP",
    "AVALLON U5",
  ];

  const guitarItems = [
    "Maton Performer (Dreadnought)",
    "Taylor Orchestra",
    "Alhambra 9P",
    "Line 6 Variax Acoustic300",
    "Fender Telecaster",
    "Fender Stratocaster (MIDI)",
    "Gibson Les Paul Standard",
    "Vigier Excalibur Custom",
    "G&L Stratocaster",
    "Hofner violin",
    "Musicman Stingray 5 (5 cordes)",
    "Fender Mustang Bass (4 cordes)",
    "Fender Precision Bass (4 cordes) X2",
    "Fender Jazz Bass (4 cordes)",
    "Fender Jazz Bass (5 cordes)",
    "Contrebasse Gewa Pure Series",
  ];

  const ampItems = [
    "Baffle Phil Jones Bass",
    "Baffle TC Electronics RS 112 Bass",
    "Laney Cube 12R",
    "Mesa Boogie Dual Rectifier",
  ];

  const micItems = [
    "NEUMANN TLM 49",
    "AKG C414",
    "Aston spirit",
    "Shure sm7B",
    "Rhodes ntk",
    "Rhodes ntg 1",
    "Shure beta 58A",
    "Shure sm57",
    "Shure beta 52",
    "Senheiser E602",
    "Senheiser e604",
    "Senheiser mk4",
    "Beyerdynamic opus 83",
  ];

  const synthItems = [
    "Nordstage 2 73",
    "Nordstage 3 Compact",
    "Moog Sub 37",
    "Prophet Rev B",
    "Novation BassStation II",
    "Korg Kronos",
    "Yamaha Mod-X",
    "Yamaha DX7",
    "Roland V-Synth",
    "Roland MC 909",
    "Behringer Model D",
    "Mélodica",
  ];
  const locale = useLocale();

  return (
    <section className="w-full py-16 bg-[#FEFDF1]">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center">
          <InteractiveText text={title} className="text-6xl md:text-7xl" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <EquipmentItem
            src="/img/desk.avif"
            alt="Console de mixage"
            list={consoleItems}
            className="md:col-span-2 h-[400px]"
          />

          <EquipmentItem
            src="/img/guitars.avif"
            alt="Guitares"
            list={guitarItems}
            className="h-[400px]"
          />

          <EquipmentItem
            src="/img/amps.avif"
            alt="Amplificateurs"
            list={ampItems}
            className="aspect-square"
          />

          <EquipmentItem
            src="/img/mics.avif"
            alt="Microphones"
            list={micItems}
            className="aspect-square"
          />

          <EquipmentItem
            src="/img/synths.avif"
            alt="Synthétiseurs"
            list={synthItems}
            className="aspect-square"
          />

          <EquipmentItemWithCaption
            src="/img/cabine.png"
            alt="Cabine de prises"
            caption={locale === "fr" ? "Cabine de prises" : "Recording booth"}
            className="md:col-span-3 aspect-[21/9]"
          />
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
