import createServer from "@inertiajs/react/server";
import { createInertiaApp } from "@inertiajs/react";
import ReactDOMServer from "react-dom/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import "@/i18n";

const appName: string = import.meta.env.VITE_APP_NAME || "PrintForge";

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.tsx`,
                import.meta.glob("./Pages/**/*.tsx"),
            ),
        setup: ({ App, props }) => <App {...props} />,
    }),
);
