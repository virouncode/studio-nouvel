import Background from "@/components/backgrounds/Background";
import LocaleButton from "@/components/buttons/locale-button";
import InteractiveText from "@/components/InteractiveText";
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
    <main className="flex flex-col items-center justify-between h-dvh w-full relative p-10 md:p-24">
      <Background />
      <section className="container h-full w-full flex items-center justify-center md:justify-end">
        <nav className="text-3xl md:text-6xl flex flex-col font-bold gap-2">
          <IntlLink href="/image">
            <InteractiveText
              text={t("musique-a-limage")}
              className="cursor-pointer"
            />
          </IntlLink>
          <IntlLink href="/albums">
            <InteractiveText text={t("albums")} className="cursor-pointer" />
          </IntlLink>

          <IntlLink href="/equipe">
            <InteractiveText text={t("lequipe")} className="cursor-pointer" />
          </IntlLink>
          <IntlLink href="/contact">
            <InteractiveText text={t("contact")} className="cursor-pointer" />
          </IntlLink>
        </nav>
      </section>
      <div className="absolute bottom-8 right-8 flex items-center gap-4">
        <LocaleButton className="bg-white text-black border-slate-300 border hover:bg-slate-200" />
        <Link
          href="https://www.instagram.com/studio_nouvel/#"
          className="hover:opacity-80"
          target="_blank"
        >
          <Instagram size={30} />
        </Link>
      </div>
    </main>
  );
};

export default page;
