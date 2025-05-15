"use client";

import Background from "@/components/backgrounds/Background";
import InteractiveText from "@/components/InteractiveText";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../../../../../public/fonts/HelveticaNeueLight.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "../../../../../public/fonts/HelveticaNeueMedium.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../../../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../../../../public/fonts/HelveticaNeueBlack.otf",
      weight: "800",
      style: "black",
    },
  ],
});

const ContactPage = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@studionouvel.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33695582901";
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] w-full relative p-8 md:p-16">
      <Background />
      <section className="container h-full w-full flex flex-col lg:flex-row justify-between gap-12 z-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-between py-10">
          <h1
            className={`${helvetica.className} text-6xl md:text-8xl font-bold mb-10 text-center`}
          >
            <InteractiveText text="Contact" />
          </h1>
          <p
            className={`${helvetica.className} text-3xl md:text-5xl mb-10 text-center`}
          >
            Un projet dont vous voulez nous parler ?
          </p>
          <p className={`${helvetica.className}  text-3xl text-center mb-10`}>
            Contactez <span className="text-[#EB4642]">Studio Nouvel</span>
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleEmailClick}
              className={`${helvetica.className} text-lg py-6 px-8 flex items-center gap-2 cursor-pointer w-[250px]`}
              variant="destructive"
            >
              <Mail size={20} className="relative top-[-1px]" />
              <span className="relative top-[1px]">Par email</span>
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
        </div>

        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Studio+Nouvel,Paris+France&zoom=17"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
