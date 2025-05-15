import { Link as IntlLink } from "@/i18n/navigation";
import { Clapperboard, Disc3, Instagram, Mail, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LocaleButton from "./buttons/locale-button";

const Header = () => {
  const t = useTranslations("header");
  return (
    <div className="w-full sticky top-0 h-16 bg-black/90 z-50 shadow">
      <header className="h-full flex justify-between items-center p-4 mx-auto container">
        <div className="flex items-center gap-6 hover:opacity-80">
          <IntlLink href="/">
            <div className="relative h-[50px] w-[50px]">
              <Image
                src="/img/logo_studio.avif"
                alt={t("logo-studio-nouvel")}
                fill={true}
                quality={100}
                className="object-contain"
              />
            </div>
          </IntlLink>
        </div>
        <div className="flex gap-8 items-center">
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <div
              className={`flex gap-1 items-center text-slate-200 hover:opacity-80
              }`}
            >
              <Clapperboard size={15} />
              <IntlLink href="/image">{t("musique-a-limage")}</IntlLink>
            </div>
            <div
              className={`flex gap-1 items-center text-slate-200 hover:opacity-80
              }`}
            >
              <Disc3 size={15} />
              <IntlLink href="/albums">{t("albums")}</IntlLink>
            </div>

            <div
              className={`flex gap-1 items-center text-slate-200 hover:opacity-80
              }`}
            >
              <UsersRound size={15} />
              <IntlLink href="/equipe">{t("lequipe")}</IntlLink>
            </div>
            <div
              className={`flex gap-1 items-center text-slate-200 hover:opacity-80
              }`}
            >
              <Mail size={15} />
              <IntlLink href="/contact">{t("contact")}</IntlLink>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <LocaleButton />
            <Link
              href="https://www.instagram.com/studio_nouvel/#"
              className="text-white font-normal"
            >
              <Instagram size={15} />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
