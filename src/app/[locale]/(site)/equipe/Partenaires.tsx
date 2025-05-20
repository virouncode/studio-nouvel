"use client";

import Autoscroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Image from "next/image";
import InteractiveText from "../../../../components/InteractiveText";

const Partenaires = () => {
  const t = useTranslations("equipe");
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="w-full flex flex-col gap-10 ">
        <h2 className="mb-12 text-center">
          <InteractiveText
            text={t("ils-nous-font-confiance")}
            className="text-6xl md:text-7xl"
          />
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoscroll({
              direction: "forward",
              speed: 2,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/blablacar_logo-QLDrCjB1sm8vk2KobCpD36Pj7vJKjz.avif"
                  alt="logo-blablacar"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/bledina_logo-AiGDhag11fpCa5p4sPHpoYBARi7NVj.avif"
                  alt="logo-bledina"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/francetv_logo-GZ0y4ToRwgN7j2L2FW9eZ8Dg4uSRSD.avif"
                  alt="logo-francetv"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/orange_logo-UJxLGUknK1UicLF8rQxrftz79R2KDO.avif"
                  alt="logo-orange"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/sisley_logo-40VA7t0GkurIminFRJYimPQvMriZ7D.avif"
                  alt="logo-sisley"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/slash_logo-4roC3OlzhkWHbGwhuu8DACrxYvfeUa.webp"
                  alt="logo-francetvslash"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/sosh_logo-zjFfB2To46VhnWeTtbrbhR3yqKwRAn.avif"
                  alt="logo-sosh"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/tf1_logo-XhXKSlDAflzIQMJEKYQDScP94mXmoV.avif"
                  alt="logo-tf1"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/thuasne_logo-NrAyuVkY5I1zyndyf3wzTVa7Bs9lba.avif"
                  alt="logo-thuasne"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="w-full h-48 relative mx-auto">
                <Image
                  src="https://et4nxaowl5pxdcdk.public.blob.vercel-storage.com/universal_logo-hp90M211vGO2lJSeJkWwOuxVLi6EVC.avif"
                  alt="logo-universal"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Partenaires;
