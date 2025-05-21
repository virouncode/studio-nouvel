import EquipmentSection from "@/app/[locale]/(site)/equipe/EquipmentSection";
import Partenaires from "@/app/[locale]/(site)/equipe/Partenaires";
import InteractiveText from "@/components/InteractiveText";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Team from "./Team";
import TeamPhoto from "./TeamPhoto";

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
  const t = await getTranslations("header");
  const t2 = await getTranslations("equipe");
  return (
    <main className="flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] w-full relative  bg-[#FEFDF1]">
      <h1>
        <InteractiveText
          text={t("lequipe")}
          className="text-5xl md:text-7xl mt-14 transform translate-y-4 opacity-0 animate-fade-in-up"
        />
      </h1>
      <div className="flex flex-col gap-4 my-10 px-6 transform translate-y-4 opacity-0 animate-fade-in-up">
        <p className="max-w-prose mx-auto hyphens-auto text-lg">
          {t2("cree-en-2021")}{" "}
          <span className="text-destructive font-bold">
            {t2("studio-nouvel")}
          </span>{" "}
          {t2(
            "est-une-equipe-de-compositeurs-musiciens-et-ingenieurs-du-son-au-service-de-vos-projets-musicaux"
          )}
        </p>
        <p className="max-w-prose mx-auto hyphens-auto text-lg">
          {t2(
            "ep-albums-musique-a-limage-doublage-creation-arrangement-enregistrement-mix-nous-realisons-de-la-musique-de-qualite-pour-tous-types-de-support"
          )}
        </p>
      </div>

      <Team />
      <TeamPhoto />
      <Partenaires />
      <EquipmentSection title={t("equipement")} />
    </main>
  );
};

export default page;
