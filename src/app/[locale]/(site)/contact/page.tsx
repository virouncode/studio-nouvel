import Background from "@/components/backgrounds/Background";
import ContactButtons from "@/components/buttons/contact-buttons";
import InteractiveText from "@/components/InteractiveText";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";

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

const helvetica = localFont({
  src: [
    {
      path: "../../../../../public/fonts/HelveticaNeueLight.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "../../../../../public/fonts/HelveticaNeueMedium.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../../../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../../../../public/fonts/HelveticaNeueBlack.otf",
      weight: "800",
      style: "black",
    },
  ],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  return (
    <main className="flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] w-full relative py-8 md:py-32">
      <Background />
      <section className="container h-full w-full flex flex-col lg:flex-row justify-between gap-12 z-10 px-6">
        <div className="w-full lg:w-1/2 flex flex-col justify-between py-10">
          <h1
            className={`${helvetica.className} text-6xl md:text-7xl font-bold mb-10 text-center`}
          >
            <InteractiveText text="Contact" />
          </h1>
          <p
            className={`${helvetica.className} text-3xl md:text-4xl mb-10 text-center`}
          >
            {t("un-projet-dont-vous-voulez-nous-parler")}
          </p>
          <p
            className={`${helvetica.className}  text-xl md:text-3xl text-center mb-10`}
          >
            {t("contactez")}{" "}
            <span className="text-[#EB4642]">Studio Nouvel</span>
          </p>
          <ContactButtons />
        </div>

        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Studio+Nouvel,Paris+France&zoom=17"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default page;
