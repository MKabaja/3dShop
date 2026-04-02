import { type ReactNode, useEffect } from "react";

import { Head } from "@inertiajs/react";
import Logo from "@/Components/ui/Logo";
import { useTranslation } from "react-i18next";
import usePageInfo from "@/hooks/usePageInfo";

interface Props {
    children: ReactNode;
    title: string;
}

export default function GuestLayout({ children, title }: Props) {
    const { canonicalUrl, locale } = usePageInfo();
    const { i18n, t } = useTranslation();

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
                <meta name="robots" content="noindex, nofollow"></meta>
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className="min-h-screen  gap-8 flex flex-col items-center justify-center bg-base p-5">
                <Logo size="lg" />

                <main
                    id="auth-content"
                    tabIndex={-1}
                    className="w-full max-w-md"
                >
                    {children}
                </main>
            </div>
        </>
    );
}
