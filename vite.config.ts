import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

const r = (p: string) => path.resolve(process.cwd(), p);
const js = "resources/js";

export default defineConfig({
    server: {
        host: "0.0.0.0", // Pozwala na dostęp z zewnątrz kontenera
        hmr: {
            host: "localhost",
        },
        watch: {
            usePolling: true, // Bardzo ważne dla WSL2/Windows!
        },
    },

    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": r(js),
            "@features": r(`${js}/features`),
            "@navigation": r(`${js}/navigation`),
            "@shared": r(`${js}/shared`),
            "@ui": r(`${js}/shared/ui`),
            "@hooks": r(`${js}/shared/hooks`),
            "@types": r(`${js}/shared/types`),
            "@constants": r(`${js}/shared/constants`),
            "@components": r(`${js}/components`),
            "@layouts": r(`${js}/layouts`),
            "@pages": r(`${js}/pages`),
            "@locales": r(`${js}/locales`),

            "@routes": "ziggy-js",
        },
    },
});
