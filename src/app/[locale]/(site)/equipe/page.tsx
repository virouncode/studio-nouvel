import EquipmentSection from "@/components/EquipmentSection";
import InteractiveText from "@/components/InteractiveText";
import Partenaires from "@/components/Partenaires";
import { routing } from "@/i18n/routing";
import { Instagram } from "lucide-react";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <main className="flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] w-full relative  bg-[#FEFDF1]">
      <h1>
        <InteractiveText
          text={t("lequipe")}
          className="text-6xl md:text-7xl my-14"
        />
      </h1>
      <section>
        <div className="flex flex-col md:flex-row justify-between gap-10 xl:gap-28 w-full mx-auto container px-6 pb-20">
          <div className="flex flex-col gap-6 md:w-1/3 transform translate-y-4 opacity-0 animate-fade-in-up">
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/img/remy.jpg"
                alt="Rémy Charlet"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-4 text-justify">
              <div className="flex items-center gap-4">
                <h2 className="font-bold text-xl">Rémy Charlet</h2>
                <Link
                  href="https://www.instagram.com/charletremy"
                  className="text-gray-700 hover:text-black transition-transform hover:scale-110"
                  target="_blank"
                >
                  <Instagram size={22} />
                </Link>
              </div>
              {locale === "fr" ? (
                <>
                  <p>
                    Rémy est un véritable surdoué de la musique, médaillé
                    d&apos;or du Conservatoire de Lille où il étudie le{" "}
                    <strong>piano</strong> et la <strong>clarinette</strong>. Il
                    obtient par la suite son{""}
                    <strong>diplôme de Film Scoring à Berklee</strong>, entre 2
                    tournées avec des artistes de renom.
                  </p>
                  <p>
                    Il est grandement sollicité pour sa maîtrise parfaite des{" "}
                    <strong>synthétiseurs vintage et modernes </strong>ainsi que
                    ses talents d&apos;<strong>arrangeur</strong>, hérités de
                    son goût pour le classique.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Rémy is a true musical prodigy, a gold medalist from the
                    Lille Conservatory where he studied <strong>piano</strong>{" "}
                    and <strong>clarinet</strong>. He later earned his degree in
                    Film Scoring from Berklee, between two tours with renowned
                    artists.
                  </p>
                  <p>
                    He is highly sought after for his expert command of both{" "}
                    <strong>vintage and modern synthesizers</strong>, as well as
                    his exceptional <strong>arranging skills</strong>, rooted in
                    his love for classical music.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:w-1/3 transform translate-y-4 opacity-0 animate-fade-in-up">
            <div className="relative  w-full h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/img/max.jpg"
                alt="Maxime Pichon"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-4 text-justify">
              <div className="flex items-center gap-4">
                <h2 className="font-bold text-xl">Maxime Pichon</h2>
                <Link
                  href="https://www.instagram.com/maximepichon"
                  className="text-gray-700 hover:text-black transition-transform hover:scale-110"
                  target="_blank"
                >
                  <Instagram size={22} />
                </Link>
              </div>
              {locale === "fr" ? (
                <>
                  <p>
                    Alors qu&apos;il commence la musique par le{" "}
                    <strong>jazz</strong> via le saxophone et la guitare, Max
                    obtient un{" "}
                    <strong>
                      master en musicologie sur les musiques orientales
                    </strong>
                    . Aujourd&apos;hui c&apos;est dans l&apos;
                    <strong>urbain</strong> et l&apos;
                    <strong>electro</strong> que Max s&apos;exprime pleinement
                    aujourd&apos;hui.
                  </p>
                  <p>
                    Sa pratique <strong>unique</strong> et très personnelle des
                    outils de <strong>production</strong> amène les projets du
                    Studio Nouvel hors des sentiers battus.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Though he began his musical journey with{" "}
                    <strong>jazz</strong> through the saxophone and guitar, and
                    earned a{" "}
                    <strong>
                      master’s degree in musicology focused on Eastern music
                    </strong>
                    , Max now fully expresses himself through{" "}
                    <strong>urban and electronic</strong> music.
                  </p>
                  <p>
                    His <strong>unique</strong> and deeply personal approach to{" "}
                    <strong>production</strong> tools takes Studio Nouvel’s
                    projects off the beaten path.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:w-1/3 transform translate-y-4 opacity-0 animate-fade-in-up">
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/img/antonin.jpg"
                alt="Antonin Rubatat"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-4 text-justify">
              <div className="flex items-center gap-4">
                <h2 className="font-bold text-xl">Antonin Rubatat</h2>
                <Link
                  href="https://www.instagram.com/antoninrubatat"
                  className="text-gray-700 hover:text-black transition-transform hover:scale-110"
                  target="_blank"
                >
                  <Instagram size={22} />
                </Link>
              </div>
              {locale === "fr" ? (
                <>
                  <p>
                    Après une année de perfectionnement en{" "}
                    <strong>musiques actuelles</strong> à la{" "}
                    <strong>M.A.I</strong> de Nancy, il devient hyperactif sur
                    les scènes parisiennes où il commence à{" "}
                    <strong>composer, enregistrer et mixer</strong> pour de
                    nombreux artistes dans des styles allant du{" "}
                    <strong>jazz</strong> au <strong>metal</strong> en passant
                    par la <strong>pop</strong>.
                  </p>
                  <p>
                    Sa double casquette de <strong>musicien de studio</strong>{" "}
                    averti et de <strong>technicien du son</strong> lui confère
                    une grande polyvalence ainsi qu&apos;un contact privilégié
                    avec les artistes du Studio Nouvel.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    After a year of advanced training in{" "}
                    <strong>contemporary music</strong> at{" "}
                    <strong>M.A.I.</strong> in Nancy, Antonin became a fixture
                    on the Paris music scene, where he began{" "}
                    <strong>composing, recording, and mixing </strong>for
                    numerous artists across genres ranging from{" "}
                    <strong>jazz</strong> to <strong>metal</strong> to
                    <strong>pop music</strong>.
                  </p>
                  <p>
                    His dual role as a <strong>seasoned studio musician</strong>{" "}
                    and <strong>sound engineer</strong> gives him great
                    versatility and a unique rapport with the artists at Studio
                    Nouvel.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[calc(100vh-4rem)] bg-#EDEBDF relative">
        <Image
          src="/img/groupe_rires.jpg"
          alt="Studio Nouvel"
          fill
          className="object-cover"
        />
      </section>

      <Partenaires />

      <EquipmentSection title={t("equipement")} />
    </main>
  );
};

export default page;
