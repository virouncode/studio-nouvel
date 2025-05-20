import LocaleButton from "@/components/buttons/locale-button";
import InstagramButton from "./InstagramButton";

const LandingButtons = () => {
  return (
    <div className="absolute bottom-8 right-8 flex items-center gap-4 z-10">
      <LocaleButton className="bg-white text-black border-slate-300 border hover:bg-slate-200" />
      <InstagramButton />
    </div>
  );
};

export default LandingButtons;
