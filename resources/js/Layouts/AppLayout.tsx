import { type ReactNode, useEffect } from "react";
import type { PageProps } from "../types/global/pageProps";
import { Head, usePage } from "@inertiajs/react";
import Navbar from "../Components/navigation/Navbar";
import { useTranslation } from "react-i18next";

interface Props {
    children: ReactNode;
    title: string;
    description?: string;
    ogImage?: string;
}

export default function AppLayout({
    children,
    title,
    description,
    ogImage,
}: Props) {
    const { url, props: pageProps } = usePage<PageProps>();
    const { i18n, t } = useTranslation();

    const base = pageProps.app_url ?? (import.meta.env.VITE_APP_URL as string);
    const canonicalUrl = base ? new URL(url, base).href : url;
    const locale = pageProps.locale ?? "en";

    // Sync during  Intentional changes
    useEffect(() => {
        if (!locale || i18n.language === locale) return;

        (async () => {
            try {
                await i18n.changeLanguage(locale);
            } catch (err) {
                console.error("Language synchronization failed", err);
            }
        })();
    }, [locale, i18n]);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

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
                {ogImage && <meta property="og:image" content={ogImage} />}
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
