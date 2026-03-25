import { Head, usePage } from "@inertiajs/react";
import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
    children: ReactNode;
    title: string;
    description?: string;
}

export default function AppLayout({ children, title, description }: Props) {
    const { url } = usePage();
    const canonicalUrl = `${import.meta.env.VITE_APP_URL}${url}`;

    return (
        <>
            <Head>
                <title>{`${title}`}</title>
                {description && (
                    <meta name="description" content={description} />
                )}
                <link rel="canonical" href={canonicalUrl} />
                {/* Open Graph */}
                
                {/* tytuł w podglądzie linku */}
                <meta property="og:title" content={`${title}`} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="3D Shop" />
            </Head>

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
