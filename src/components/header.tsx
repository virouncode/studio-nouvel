"use client";

import { Link as IntlLink, usePathname } from "@/i18n/navigation";
import {
  Clapperboard,
  Disc3,
  Instagram,
  Mail,
  Menu,
  UsersRound,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LocaleButton from "./buttons/locale-button";
import InteractiveText from "./InteractiveText";

const Header = () => {
  const t = useTranslations("header");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname.includes(path);
  };
  const handleShowMobileNav = () => {
    setIsMobileNavOpen(true);
  };
  const handleHideMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div
      className={`w-full sticky top-0 h-16 z-50 transition-all duration-300 border-b border-black ${
        scrolled ? "bg-[#FEFDF1]/90 backdrop-blur-md shadow-sm" : "bg-[#FEFDF1]"
      }`}
    >
      <header className="max-w-7xl h-full flex justify-between items-center px-6 mx-auto container">
        <div className="flex items-center gap-6 transition-transform hover:scale-105">
          <IntlLink href="/">
            <div className="relative h-[50px] w-[50px]">
              <Image
                src="/img/logo_studio_black.png"
                alt={t("logo-studio-nouvel")}
                fill={true}
                quality={100}
                className="object-contain"
              />
            </div>
          </IntlLink>
        </div>
        <div className="flex gap-8 items-center">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <div className="group relative">
              <div
                className={`flex gap-2 items-center ${
                  isActive("/image")
                    ? "text-black font-bold"
                    : "text-gray-600 hover:text-black"
                } transition-colors duration-200`}
              >
                <Clapperboard size={16} />
                <IntlLink href="/image">{t("musique-a-limage")}</IntlLink>
              </div>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${
                  isActive("/image") ? "w-full" : ""
                }`}
              ></span>
            </div>

            <div className="group relative">
              <div
                className={`flex gap-2 items-center ${
                  isActive("/albums")
                    ? "text-black font-bold"
                    : "text-gray-600 hover:text-black"
                } transition-colors duration-200`}
              >
                <Disc3 size={16} />
                <IntlLink href="/albums">{t("albums")}</IntlLink>
              </div>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${
                  isActive("/albums") ? "w-full" : ""
                }`}
              ></span>
            </div>

            <div className="group relative">
              <div
                className={`flex gap-2 items-center ${
                  isActive("/equipe")
                    ? "text-black font-bold"
                    : "text-gray-600 hover:text-black"
                } transition-colors duration-200`}
              >
                <UsersRound size={16} />
                <IntlLink href="/equipe">{t("lequipe")}</IntlLink>
              </div>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${
                  isActive("/equipe") ? "w-full" : ""
                }`}
              ></span>
            </div>

            <div className="group relative">
              <div
                className={`flex gap-2 items-center ${
                  isActive("/contact")
                    ? "text-black font-bold"
                    : "text-gray-600 hover:text-black"
                } transition-colors duration-200`}
              >
                <Mail size={16} />
                <IntlLink href="/contact">{t("contact")}</IntlLink>
              </div>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${
                  isActive("/contact") ? "w-full" : ""
                }`}
              ></span>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <LocaleButton className="bg-transparent text-gray-700 hover:text-black border border-gray-200 hover:border-gray-400 shadow-none hover:bg-gray-50/50 transition-all duration-300" />
            <Link
              href="https://www.instagram.com/studio_nouvel/#"
              className="text-gray-700 hover:text-black transition-transform hover:scale-110"
              target="_blank"
            >
              <Instagram size={22} />
            </Link>
            {isMobileNavOpen ? (
              <X
                size={30}
                className="block md:hidden"
                onClick={handleHideMobileNav}
              />
            ) : (
              <Menu
                size={30}
                className="block md:hidden"
                onClick={handleShowMobileNav}
              />
            )}
          </div>
          {/***************** Mobile navigation *****************/}
          <div
            className={`text-center gap-6 flex flex-col items-center justify-center fixed top-16 left-0 right-0 bg-background shadow-lg h-[calc(100vh-4rem)] text-3xl px-4 ${
              isMobileNavOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } transition-all ease-in-out duration-300`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="w-[100px] md:w-[200px]  h-[100px] md:h-[200px] relative">
              <Image
                src="/img/logo_studio_black.png"
                alt="Logo"
                fill
                quality={100}
              />
            </div>
            <div
              className="flex flex-col gap-2"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <IntlLink href="/">
                <InteractiveText text="Home" />
              </IntlLink>
              <IntlLink href="/image">
                <InteractiveText text={t("musique-a-limage")} />
              </IntlLink>
              <IntlLink href="/albums">
                <InteractiveText text={t("albums")} />
              </IntlLink>
              <IntlLink href="/equipe">
                <InteractiveText text={t("lequipe")} />
              </IntlLink>
              <IntlLink href="/contact">
                <InteractiveText text={t("contact")} />
              </IntlLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
