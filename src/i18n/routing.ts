import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames: {
    "/": {
      fr: "/",
      en: "/",
    },
    "/image": {
      fr: "/musique-a-l-image",
      en: "/music-for-visual-media",
    },
    "/albums": {
      fr: "/albums",
      en: "/records",
    },
    "/equipe": {
      fr: "/notre-equipe",
      en: "/our-team",
    },
    "/contact": {
      fr: "/contactez-nous",
      en: "/contact-us",
    },
  },
});

export type LocaleType = (typeof routing.locales)[number];
