"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

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
        className={`text-base py-6 px-8 flex items-center gap-2 cursor-pointer w-[250px]`}
        variant="destructive"
      >
        <Mail size={20} />
        <span>{t("par-email")}</span>
      </Button>
      <Button
        onClick={handlePhoneClick}
        className={`text-base py-6 px-8 flex items-center gap-2 cursor-pointer w-[250px]`}
        variant="destructive"
      >
        <Phone size={20} />
        <span>+33 6 95 58 29 01</span>
      </Button>
    </div>
  );
};

export default ContactButtons;
