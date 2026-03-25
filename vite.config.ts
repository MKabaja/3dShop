import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

const js: string = "resources/js";
const ziggy: string = "vendor/tightenco/ziggy/dist/index.esm.js";

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
            "@": path.resolve(process.cwd(), js),

            "@routes": "ziggy-js",
        },
    },
});
