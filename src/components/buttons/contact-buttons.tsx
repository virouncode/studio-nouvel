"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../../../public/fonts/HelveticaNeueLight.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "../../../public/fonts/HelveticaNeueMedium.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../../public/fonts/HelveticaNeueBlack.otf",
      weight: "800",
      style: "black",
    },
  ],
});

const ContactButtons = () => {
  const t = useTranslations("contact");
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@studionouvel.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33695582901";
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <Button
        onClick={handleEmailClick}
        className={`${helvetica.className} text-lg py-6 px-8 flex items-center gap-2 cursor-pointer w-[250px]`}
        variant="destructive"
      >
        <Mail size={20} className="relative top-[-1px]" />
        <span className="relative top-[1px]">{t("par-email")}</span>
      </Button>
      <Button
        onClick={handlePhoneClick}
        className={`${helvetica.className} text-lg py-6 px-8 flex items-center gap-2 cursor-pointer w-[250px]`}
        variant="destructive"
      >
        <Phone size={20} className="relative top-[-1px]" />
        <span className="relative top-[1px]">+33 6 95 58 29 01</span>
      </Button>
    </div>
  );
};

export default ContactButtons;
