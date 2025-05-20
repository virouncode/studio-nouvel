import ContactButtons from "@/components/buttons/contact-buttons";
import InteractiveText from "@/components/InteractiveText";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-between py-10 transform translate-y-4 opacity-0 animate-fade-in-up">
      <h1 className={`text-5xl md:text-7xl font-bold mb-10 text-center`}>
        <InteractiveText text="Contact" />
      </h1>
      <p className={`text-3xl md:text-4xl mb-10 text-center font-bold`}>
        {t("un-projet-dont-vous-voulez-nous-parler")}
      </p>
      <p className={`text-xl md:text-3xl text-center mb-10 font-bold`}>
        {t("contactez")} <span className="text-[#EB4642]">Studio Nouvel</span>
      </p>
      <ContactButtons />
    </div>
  );
};

export default Contact;
