import "./bootstrap";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { route } from "ziggy-js";
import i18n from "@/i18n";

window.route = route;
const appName = import.meta.env.VITE_APP_NAME || "PrintForge";

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx"),
        ),
    setup({ el, App, props }) {
        const locale = (props.initialPage.props as any).locale ?? "en";
        i18n.changeLanguage(locale);

        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: "#2563eb",
    },
});
