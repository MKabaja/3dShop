import { AxiosInstance } from 'axios';
import { route as routeFn } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
        route: typeof routeFn;
    }
    var route: typeof routeFn;
}

// Włączamy ścisłe sprawdzanie nazw tras
declare module 'ziggy-js' {
    interface TypeConfig {
        strictRouteNames: true;
    }
}

export {}; // Ważne, żeby TS potraktował to jako moduł
