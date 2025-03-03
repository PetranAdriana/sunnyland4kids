import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const defaultLocale = "ro";
export const locales = ["en", "ro"] as const;

export const routing = defineRouting({
  locales: ["en", "ro"],
  defaultLocale: "ro",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      ro: "/despre",
    },
    "/contact": {
      en: "/contact",
      ro: "/contact",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
