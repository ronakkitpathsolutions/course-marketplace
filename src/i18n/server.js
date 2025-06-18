import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import { BASE_URL, LANGUAGES } from "@/constants";
import { getServerLanguage } from "@/helpers/server-language";

export async function initI18nextServer(lang) {
  const instance = i18next.createInstance();
  
  // If no language is provided, get it from server-side cookies
  let detectedLanguage = lang;
  if (!detectedLanguage) {
    try {
      detectedLanguage = await getServerLanguage();
    } catch (error) {
      detectedLanguage = "en";
    }
  }
  
  // Ensure the detected language is supported
  if (!LANGUAGES.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }
    
  await instance.use(HttpBackend).init({
    lng: detectedLanguage,
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
  });

  return instance;
}
