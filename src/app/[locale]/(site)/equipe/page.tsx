import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const urlFr = `https://www.studionouvel.com/fr/notre-equipe`;
  const urlEn = `https://www.studionouvel.com/en/our-team`;
  return {
    title:
      locale === "fr"
        ? "Notre équipe | Studio Nouvel"
        : "Our team | Studio Nouvel",
    description:
      locale === "fr"
        ? "Studio Nouvel : présentation de notre équipe pour votre projet musical"
        : "Studio Nouvel: meet our team for your musical project",
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
  return <div>Notre équipe</div>;
};

export default page;
