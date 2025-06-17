import { BASE_URL, LANGUAGES } from "@/constants";
import { getClientLanguage } from "@/helpers";
import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
  // Get initial language from client-side detection
  const initialLanguage =
    typeof window !== "undefined" ? getClientLanguage() : "en";

  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      lng: initialLanguage,
      fallbackLng: "en",
      supportedLngs: LANGUAGES,
      ns: ["translation"],
      defaultNS: "translation",
      backend: {
        loadPath: `${BASE_URL}/languages/{{lng}}.json`,
      },
      interpolation: {
        escapeValue: false,
      },
      // Reduce hydration issues
      react: {
        useSuspense: false,
      },
      // Debug mode for troubleshooting
      debug: process.env.NODE_ENV === "development",
    });
}

export default i18n;
