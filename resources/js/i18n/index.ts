import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import pl from "@/locales/pl.json";

const supportedLocales = ["en", "pl"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

function getInitialLocale(): SupportedLocale {
    const htmlLang = document.documentElement.lang?.split("-")[0];
    return supportedLocales.includes(htmlLang as SupportedLocale)
        ? (htmlLang as SupportedLocale)
        : "en";
}

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        pl: { translation: pl },
    },
    fallbackLng: "en",
    lng: getInitialLocale(),
    interpolation: { escapeValue: false },
});

export default i18n;
