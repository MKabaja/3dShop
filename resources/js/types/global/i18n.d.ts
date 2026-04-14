import "i18next";

import pl from "../locales/pl.json";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "common";
        resources: {
            common: typeof import("@/locales/pl/plCommon.json");
            landing: typeof import("@/locales/pl/plLanding.json");
        };

        allowObjectInHTMLChildren: true;
    }
}
