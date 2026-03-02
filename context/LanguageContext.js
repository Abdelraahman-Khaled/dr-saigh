"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import translations from "../app/translations";

const LanguageContext = createContext();

const LOCALES = ["ar", "en"];
const DEFAULT_LOCALE = "ar";

/** Extract locale from current pathname, e.g. /ar/blog → "ar" */
function getLocaleFromPath(pathname) {
  for (const locale of LOCALES) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return null;
}

export const LanguageProvider = ({ children, initialLanguage = "ar" }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Derive language from URL first, then fall back to initialLanguage
  const urlLocale = getLocaleFromPath(pathname);
  const [language, setLanguageState] = useState(urlLocale || initialLanguage);
  const prevLanguage = useRef(language);

  // Keep language in sync when URL changes (e.g. browser back/forward)
  useEffect(() => {
    const locale = getLocaleFromPath(pathname);
    if (locale && locale !== language) {
      setLanguageState(locale);
    }
  }, [pathname]);

  useEffect(() => {
    prevLanguage.current = language;
  }, [language]);

  useEffect(() => {
    // Update HTML attributes
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    // Persist language choice in cookie
    document.cookie = `NEXT_LOCALE=${language}; path=/; max-age=31536000; samesite=lax`;
    localStorage.setItem("appLang", language);

    // Update body class for legacy scripts
    if (language === "ar") {
      document.body.classList.add("arabic");
    } else {
      document.body.classList.remove("arabic");
    }
  }, [language]);

  /**
   * Build a locale-prefixed path.
   * e.g. localePath("/blog") → "/ar/blog"
   */
  const localePath = useCallback(
    (path, overrideLocale) => {
      const locale = overrideLocale || language;
      // Already has locale prefix
      for (const l of LOCALES) {
        if (path === `/${l}` || path.startsWith(`/${l}/`)) return path;
      }
      return `/${locale}${path === "/" ? "" : path}`;
    },
    [language],
  );

  /**
   * Switch language: updates URL locale prefix, keeping the rest of the path.
   * e.g. /ar/blog → /en/blog
   */
  const toggleLanguage = useCallback(() => {
    const newLocale = language === "ar" ? "en" : "ar";
    setLanguageState(newLocale);

    // Replace locale segment in current pathname
    let newPath = pathname;
    for (const l of LOCALES) {
      if (pathname === `/${l}`) {
        newPath = `/${newLocale}`;
        break;
      }
      if (pathname.startsWith(`/${l}/`)) {
        newPath = `/${newLocale}` + pathname.slice(l.length + 1);
        break;
      }
    }
    // If no locale in path yet, just prepend
    if (newPath === pathname) newPath = `/${newLocale}${pathname}`;

    router.push(newPath);
  }, [language, pathname, router]);

  const setLanguage = useCallback(
    (lang) => {
      if (!LOCALES.includes(lang)) return;
      setLanguageState(lang);
      let newPath = pathname;
      for (const l of LOCALES) {
        if (pathname === `/${l}`) {
          newPath = `/${lang}`;
          break;
        }
        if (pathname.startsWith(`/${l}/`)) {
          newPath = `/${lang}` + pathname.slice(l.length + 1);
          break;
        }
      }
      if (newPath === pathname) newPath = `/${lang}${pathname}`;
      router.push(newPath);
    },
    [language, pathname, router],
  );

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = translations[language];
      for (const k of keys) {
        if (value && typeof value === "object") {
          value = value[k];
        } else {
          return key;
        }
      }
      return value || key;
    },
    [language],
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        localePath,
        t,
        prevLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
