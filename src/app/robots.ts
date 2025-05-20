import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const generateWrongStaticUrls = () => {
  const urls: string[] = [];

  // Pour chaque locale et chaque route définie dans routing.ts
  for (const locale of routing.locales) {
    // Parcourir toutes les routes définies dans routing.pathnames
    for (const [path, localized] of Object.entries(routing.pathnames)) {
      // Ignorer les routes dynamiques avec paramètres
      if (path === "/") continue;

      // Obtenir le chemin localisé
      let localizedPath = "";
      if (typeof localized == "string") {
        localizedPath = localized;
      } else if (localized && locale in localized) {
        localizedPath = localized[locale === "fr" ? "en" : "fr"];
      } else {
        localizedPath = path;
      }
      // Ajouter l'URL au sitemap
      urls.push(`/${locale}${localizedPath}/*`);
    }
  }
  return urls;
};

export default async function robots(): Promise<MetadataRoute.Robots> {
  const wrongStaticUrls = generateWrongStaticUrls();
  const disallowUrls = [...wrongStaticUrls];
  const uniqueDisallowUrls = [...new Set(disallowUrls)];

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: uniqueDisallowUrls,
      },
    ],
    sitemap: "https://www.studionouvel.com/sitemap.xml",
  };
}
