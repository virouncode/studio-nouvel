import MouseTrackingNav from "@/app/[locale]/(home)/MouseTrackingNav";
import BackgroundVideo from "@/components/backgrounds/BackgroundVideo";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LandingButtons from "./LandingButtons";
import LandingNav from "./LandingNav";

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
        "x-default": "https://www.studionouvel.com",
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

  return (
    <main className="flex flex-col items-center justify-between h-dvh w-full relative p-6 md:p-10 overflow-x-hidden">
      <BackgroundVideo videoId="1058212985" />
      <MouseTrackingNav timeout={2000}>
        <div className="absolute inset-0 bg-white/60 transition-opacity duration-500 z-0"></div>
        <LandingNav />
        <LandingButtons />
      </MouseTrackingNav>
    </main>
  );
};

export default page;
