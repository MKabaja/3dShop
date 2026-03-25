import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en.json";
import pl from "@/locales/pl.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        pl: { translation: pl },
    },
    fallbackLng: "en",
    lng:
        typeof window !== "undefined"
            ? localStorage.getItem("lang") || "pl"
            : "pl",
    interpolation: { escapeValue: false },
});

export default i18n;

export const setLanguage = (lang: "pl" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
};
