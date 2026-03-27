import { type ReactNode, useEffect } from "react";
import type { PageProps } from "../types/pageProps";
import { Head, usePage } from "@inertiajs/react";
import Navbar from "../Components/navigation/Navbar";
import { useTranslation } from "react-i18next";
import { i18n as I18nType } from "i18next";

interface Props {
    children: ReactNode;
    title: string;
    description?: string;
}

export default function AppLayout({ children, title, description }: Props) {
    const { url, props: pageProps } = usePage<PageProps>();
    const { i18n, t } = useTranslation();

    const base = pageProps.app_url ?? (import.meta.env.VITE_APP_URL as string);
    const canonicalUrl = base ? new URL(url, base).href : url;

    // Sync during  Intentional changes
    useEffect(() => {
        const locale = pageProps.locale;
        if (!locale || i18n.language === locale) return;

        let mounted = true;
        (async () => {
            try {
                await i18n.changeLanguage(locale);
            } catch (err) {
                console.error("Language synchronization failed", err);
            }
        })();
        return () => {
            mounted = false;
        };
    }, [pageProps.locale, i18n]);

    return (
        <>
            <Head title={title}>
                {description && (
                    <meta name="description" content={description} />
                )}
                <link rel="canonical" href={canonicalUrl} />
                {/* Open Graph */}

                {/* tytuł w podglądzie linku */}
                <meta property="og:title" content={`${title}`} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="PrintForge" />
            </Head>

            {/* SKIP LINK */}
            <a href="#main-content" className="sr-only focus:not-sr-only">
                {t("accessibility.skipToMain")}
            </a>

            <header>
                <Navbar />
            </header>

            <main id="main-content" tabIndex={-1}>
                {children}
            </main>

            <footer aria-label="Stopka strony">{/* footer później */}</footer>
        </>
    );
}

async function syncLanguage(locale: string | undefined, i18n: I18nType) {
    if (!locale || i18n.language === locale) return;
    try {
        await i18n.changeLanguage(locale);
    } catch (err) {
        console.error("Language synchronization failed");
    }
}
