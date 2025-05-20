import Background from "@/components/backgrounds/Background";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Contact from "./Contact";
import GoogleMap from "./GoogleMap";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const urlFr = `https://www.studionouvel.com/fr/contact`;
  const urlEn = `https://www.studionouvel.com/en/contact`;
  return {
    title: "Contact | Studio Nouvel",
    description:
      locale === "fr"
        ? "Studio Nouvel : contactez-nous pour votre projet musical"
        : "Studio Nouvel: contact-us for your musical project",
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
  return (
    <main className="flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] w-full relative py-8 md:py-32">
      <Background />
      <section className="container h-full w-full flex flex-col lg:flex-row justify-between gap-12 z-10 px-6">
        <Contact />
        <GoogleMap />
      </section>
    </main>
  );
};

export default page;
