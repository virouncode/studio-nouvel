import Header from "@/components/header";
import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Studio Nouvel",
  description: "Studio Nouvel - Musique à l'image - Albums = Enregistrement",
};

export default function Siteayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
