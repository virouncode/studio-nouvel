import InteractiveText from "@/components/InteractiveText";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const LandingNav = () => {
  const t = useTranslations("header");
  return (
    <section className="container mx-auto h-full w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 relative z-10">
      <div className="lg:w-1/3 flex justify-center">
        <div className="w-[100px] md:w-[200px] lg:w-[300px] h-[100px] md:h-[200px] lg:h-[300px] relative">
          <Image
            src="/img/logo_studio_black.png"
            alt="Logo"
            fill
            quality={100}
          />
        </div>
      </div>
      <nav className="lg:w-2/3 text-3xl md:text-6xl flex flex-col font-bold gap-2 text-white text-center lg:text-end">
        <div
          className="transform translate-y-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          <Link href="/image">
            <InteractiveText
              text={t("musique-a-limage")}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div
          className="transform translate-y-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <Link href="/albums">
            <InteractiveText text={t("albums")} className="cursor-pointer" />
          </Link>
        </div>
        <div
          className="transform translate-y-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <Link href="/equipe">
            <InteractiveText text={t("lequipe")} className="cursor-pointer" />
          </Link>
        </div>
        <div
          className="transform translate-y-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <Link href="/contact">
            <InteractiveText text={t("contact")} className="cursor-pointer" />
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default LandingNav;
