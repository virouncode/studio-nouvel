import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";

const InstagramButton = () => {
  return (
    <Link
      href="https://www.instagram.com/studio_nouvel/#"
      className="hover:opacity-80 text-white"
      target="_blank"
      title="Instagram"
      aria-label="Lien vers Instagram"
    >
      <Button
        variant="outline"
        size="icon"
        aria-label="Instagram"
        title="Instagram"
      >
        <Instagram size={30} color="black" />
      </Button>
    </Link>
  );
};

export default InstagramButton;
