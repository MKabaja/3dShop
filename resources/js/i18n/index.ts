import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/locales/en/enCommon.json";
import enLanding from "@/locales/en/enLanding.json";

import plCommon from "@/locales/pl/plCommon.json";
import plLanding from "@/locales/pl/plLanding.json";

const resources = {
    en: {
        common: enCommon,
        landing: enLanding,
    },
    pl: {
        common: plCommon,
        landing: plLanding,
    },
} as const;

type SupportedLocale = keyof typeof resources;
const supportedLocales = Object.keys(resources) as SupportedLocale[];

function getInitialLocale(): SupportedLocale {
    const htmlLang = document.documentElement.lang?.split("-")[0];

    return supportedLocales.includes(htmlLang as SupportedLocale)
        ? (htmlLang as SupportedLocale)
        : "en";
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    lng: getInitialLocale(),

    ns: ["common", "landing"],
    defaultNS: "common",

    interpolation: { escapeValue: false },
});

export default i18n;
