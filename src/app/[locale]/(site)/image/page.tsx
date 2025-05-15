import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import YouTubeGallery from "./YoutubeGallery";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const urlFr = `https://www.studionouvel.com/fr/musique-a-l-image`;
  const urlEn = `https://www.studionouvel.com/en/music-for-visual-media`;
  return {
    title:
      locale === "fr"
        ? "Musique à l'image | Studio Nouvel"
        : "Music for visual media | Studio Nouvel",
    description:
      locale === "fr"
        ? "Nos réalisations de musique à l'image"
        : "Our music for film and visual media",
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
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-black">
      <YouTubeGallery />
    </main>
  );
};

export default page;
