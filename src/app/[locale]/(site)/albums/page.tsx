import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SpotifyEmbed } from "./SpotifyEmbed";

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
  const spotifyUrls = [
    "https://open.spotify.com/embed/album/0BNgQI8o6GojatTrhbeaQk?utm_source=generator",
    "https://open.spotify.com/embed/album/0hx5u50Xj93WnRZvuTswAK?utm_source=generator",
    "https://open.spotify.com/embed/album/6tg44LPdlPF1aP7eAdtikA?utm_source=generator",
    "https://open.spotify.com/embed/album/1IiRwPFbUPoWfVtKPTJPco?utm_source=generator",
    "https://open.spotify.com/embed/album/2P79CadC6ZQc8avZZyIlCA?utm_source=generator",
    "https://open.spotify.com/embed/album/7GbrAWCYUZcyai7Lf6AO6Y?utm_source=generator",
    "https://open.spotify.com/embed/track/6Dysl0j9DXwmPHQxhA4kK3?utm_source=generator",
    "https://open.spotify.com/embed/album/3aSFLaujGZAvmECJpwnvua?utm_source=generator",
    "https://open.spotify.com/embed/album/2cjbGGvEsPjKzQrR1N2vPj?utm_source=generator",
    "https://open.spotify.com/embed/album/1BWlfOYi4WfwUOzsBdjkb1?utm_source=generator",
    "https://open.spotify.com/embed/track/2plJkVTL2FR6Z1R9NfDmDv?utm_source=generator",
    "https://open.spotify.com/embed/album/4jSXmRVS55eMkC9EekheR8?utm_source=generator",
    "https://open.spotify.com/embed/artist/4XC7l6YtemaWPq3hYtF0VS?utm_source=generator",
    "https://open.spotify.com/embed/track/08DqazD0XGA5MjM47bOa19?utm_source=generator",
    "https://open.spotify.com/embed/track/0XECvevwXyOANRT5Y0dNJ4?utm_source=generator",
    "https://open.spotify.com/embed/artist/7ddKeUgDmUyhWEPCAYKuKZ?utm_source=generator",
    "https://open.spotify.com/embed/track/4jyAkHLViLGB4F77gbwqMy?utm_source=generator",
  ];

  return (
    <div className="bg-black min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 container mx-auto sm:px-6">
        {spotifyUrls.map((url, index) => (
          <SpotifyEmbed key={index} src={url} />
        ))}
      </div>
    </div>
  );
};

export default page;
