import Background from "@/components/backgrounds/Background";
import LocaleButton from "@/components/buttons/locale-button";
import InteractiveText from "@/components/InteractiveText";
import { Link as IntlLink } from "@/i18n/navigation";
import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("header");
  return (
    <main className="flex flex-col items-center justify-between h-dvh w-full relative p-24">
      <Background />
      <section className="container h-full w-full flex items-center justify-end">
        <nav className="flex flex-col">
          <IntlLink href="/image">
            <InteractiveText
              text={t("musique-a-limage")}
              className={`text-6xl font-bold mb-2 cursor-pointer`}
            />
          </IntlLink>
          <IntlLink href="/albums">
            <InteractiveText
              text={t("albums")}
              className={`text-6xl font-bold mb-2 cursor-pointer`}
            />
          </IntlLink>

          <IntlLink href="/equipe">
            <InteractiveText
              text={t("lequipe")}
              className={`text-6xl font-bold mb-2 cursor-pointer`}
            />
          </IntlLink>
          <IntlLink href="/contact">
            <InteractiveText
              text={t("contact")}
              className={`text-6xl font-bold mb-2 cursor-pointer`}
            />
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
}
