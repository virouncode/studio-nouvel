import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AlbumsContent } from "./SpotifyEmbed";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const urlFr = `https://www.studionouvel.com/fr/albums`;
  const urlEn = `https://www.studionouvel.com/en/records`;
  return {
    title:
      locale === "fr" ? "Albums | Studio Nouvel" : "Records | Studio Nouvel",
    description:
      locale === "fr"
        ? "Studio Nouvel : les albums de musique sur lesquels nous avons travaillé"
        : "Studio Nouvel: the music records we have worked on",
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AlbumsContent />;
};

export default page;
