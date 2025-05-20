import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";
const APP_URL = "https://www.studionouvel.com";

const lastMod = new Date().toISOString();
// Fonction pour générer les URLs des pages statiques
const generateStaticUrls = () => {
  const urls: MetadataRoute.Sitemap = [];
  // Pour chaque locale et chaque route définie dans routing.ts
  for (const locale of routing.locales) {
    // Parcourir toutes les routes définies dans routing.pathnames
    for (const [path, localized] of Object.entries(routing.pathnames)) {
      // Ignorer les routes dynamiques avec paramètres et les routes protégées

      // Obtenir le chemin localisé
      let localizedPath = "";
      if (typeof localized == "string") {
        localizedPath = localized;
      } else if (localized && locale in localized) {
        localizedPath = path === "/" ? "" : localized[locale];
      } else {
        localizedPath = path;
      }

      // Ajouter l'URL au sitemap
      urls.push({
        url: `${APP_URL}/${locale}${localizedPath}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: localizedPath ? 0.8 : 1,
      });
    }
  }

  return urls;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return generateStaticUrls();
}
