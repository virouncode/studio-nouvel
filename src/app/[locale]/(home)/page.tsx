import BackgroundVideo from "@/components/backgrounds/BackgroundVideo";
import LocaleButton from "@/components/buttons/locale-button";
import InteractiveText from "@/components/InteractiveText";
import MouseTrackingNav from "@/components/MouseTrackingNav";
import SoundToggleButton from "@/components/SoundToggleButton";
import VideoSoundProvider from "@/components/VideoSoundProvider";
import { Link as IntlLink } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Instagram } from "lucide-react";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const urlFr = `https://www.studionouvel.com/fr`;
  const urlEn = `https://www.studionouvel.com/en`;
  return {
    title: "Home | Studio Nouvel",
    description:
      locale === "fr"
        ? "Studio Nouvel : une équipe de compositeurs, réalisateurs, musiciens et ingénieurs du son au service de votre projet musical"
        : "Studio Nouvel: a Paris-based team of composers, directors, musicians, and sound engineers dedicated to your musical project.",
    openGraph: {
      images: [
        {
          url: "/img/logo_studio_black.png",
          width: 1200,
          height: 630,
          alt: "Logo Studio Nouvel",
        },
      ],
    },
    alternates: {
      canonical: locale === "fr" ? urlFr : urlEn,
      languages: {
        en: urlEn,
        fr: urlFr,
      },
    },
  };
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("header");
  return (
    <main className="flex flex-col items-center justify-between h-dvh w-full relative p-6 md:p-24">
      <VideoSoundProvider>
        <BackgroundVideo />
        <MouseTrackingNav timeout={2000}>
          {/* Semi-transparent overlay for better text visibility */}
          <div className="absolute inset-0 bg-white/60 transition-opacity duration-500 z-0"></div>
          <section className="container h-full w-full flex items-center justify-center md:justify-end relative z-10">
            <nav className="text-3xl md:text-6xl flex flex-col font-bold gap-2 text-white">
              <div
                className="transform translate-y-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0ms" }}
              >
                <IntlLink href="/image">
                  <InteractiveText
                    text={t("musique-a-limage")}
                    className="cursor-pointer"
                  />
                </IntlLink>
              </div>
              <div
                className="transform translate-y-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "150ms" }}
              >
                <IntlLink href="/albums">
                  <InteractiveText
                    text={t("albums")}
                    className="cursor-pointer"
                  />
                </IntlLink>
              </div>
              <div
                className="transform translate-y-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <IntlLink href="/equipe">
                  <InteractiveText
                    text={t("lequipe")}
                    className="cursor-pointer"
                  />
                </IntlLink>
              </div>
              <div
                className="transform translate-y-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "450ms" }}
              >
                <IntlLink href="/contact">
                  <InteractiveText
                    text={t("contact")}
                    className="cursor-pointer"
                  />
                </IntlLink>
              </div>
            </nav>
          </section>

          <div className="absolute bottom-8 right-8 flex items-center gap-4 z-10">
            <SoundToggleButton />
            <LocaleButton className="bg-white text-black border-slate-300 border hover:bg-slate-200" />
            <Link
              href="https://www.instagram.com/studio_nouvel/#"
              className="hover:opacity-80 text-white"
              target="_blank"
            >
              <Instagram size={30} />
            </Link>
          </div>
        </MouseTrackingNav>
      </VideoSoundProvider>
    </main>
  );
};

export default page;
