"use client";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { getClientLanguage, setLanguagePreference } from "@/helpers";
import { LANGUAGES } from "@/constants";

const I18nProvider = ({ children, lang }) => {
    
    useEffect(() => {
        // Server language should take priority if it's valid
        const serverLanguage = lang && LANGUAGES.includes(lang) ? lang : null;
        const clientLanguage = getClientLanguage();
        
        // Use server language if available, otherwise fall back to client language
        const targetLanguage = serverLanguage || clientLanguage;


        if (i18n.language !== targetLanguage) {
            i18n.changeLanguage(targetLanguage).then(() => {
                // Update client-side storage to match the current language
                setLanguagePreference(targetLanguage);
            });
        }
    }, [lang]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
