"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LocaleType, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

type LocaleButtonProps = {
  className?: string;
};

const LocaleButton = ({ className }: LocaleButtonProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();
  const searchParams = useSearchParams();

  const handleChangeLang = (newLocale: LocaleType) => {
    if (newLocale === locale) return;
    const query: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      query[key] = value;
    });
    router.replace({ pathname }, { locale: newLocale });

    // if (pathname === "/services/[slug]") {
    //   if (typeof params.slug === "string") {
    //     const newSlug =
    //       newLocale === "fr"
    //         ? getServicesSlugFr(params.slug)
    //         : getServicesSlugEn(params.slug);
    //     router.replace(
    //       { pathname, params: { slug: newSlug }, query },
    //       { locale: newLocale }
    //     );
    //   }
    // } else if (pathname === "/blog/[slug]") {
    //   if (typeof params.slug === "string") {
    //     const newSlug =
    //       newLocale === "fr"
    //         ? getArticlesSlugFr(params.slug)
    //         : getArticlesSlugEn(params.slug);
    //     router.replace(
    //       { pathname, params: { slug: newSlug }, query },
    //       { locale: newLocale }
    //     );
    //   }
    // } else if (pathname === "/blog/[slug]/[subSlug]") {
    //   if (
    //     typeof params.slug === "string" &&
    //     typeof params.subSlug === "string"
    //   ) {
    //     const newSlug =
    //       newLocale === "fr"
    //         ? getArticlesSlugFr(params.slug)
    //         : getArticlesSlugEn(params.slug);
    //     const newSubSlug =
    //       newLocale === "fr"
    //         ? getArticlesSubSlugFr(params.subSlug)
    //         : getArticlesSubSlugEn(params.subSlug);
    //     router.replace(
    //       { pathname, params: { slug: newSlug, subSlug: newSubSlug }, query },
    //       { locale: newLocale }
    //     );
    //   }
    // } else if (pathname === "/tag/[slug]") {
    //   if (typeof params.tag === "string") {
    //     const newSlug =
    //       newLocale === "fr"
    //         ? getTagSlugFr(params.tag)
    //         : getTagSlugEn(params.tag);
    //     router.replace(
    //       { pathname, params: { slug: newSlug }, query },
    //       { locale: newLocale }
    //     );
    //   }
    // } else if (pathname === "/secteurs/[slug]") {
    //   if (typeof params.slug === "string") {
    //     const newSlug =
    //       newLocale === "fr"
    //         ? getSecteurSlugFr(params.slug)
    //         : getSecteurSlugEn(params.slug);
    //     router.replace(
    //       { pathname, params: { slug: newSlug }, query },
    //       { locale: newLocale }
    //     );
    //   }
    // } else {
    //   // @ts-expect-error -- TypeScript will validate that only known `params`
    //   // // are used in combination with a given `pathname`. Since the two will
    //   // // always match for the current route, we can skip runtime checks.
    //   router.replace({ pathname, params, query }, { locale: newLocale });
    // }
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className={`flex items-center gap-1 text-sm hover:opacity-75 cursor-pointer  w-16 h-9 justify-center ${className}`}
          aria-label="Change language"
          variant="default"
        >
          {locale === "fr" ? "🇫🇷" : "🇬🇧"} {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {routing.locales.map((l) => (
          <DropdownMenuCheckboxItem
            key={l}
            checked={locale === l}
            onCheckedChange={() => handleChangeLang(l)}
            className="text-base"
          >
            {l === "fr" ? "🇫🇷" : "🇬🇧"} {l.toUpperCase()}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleButton;
