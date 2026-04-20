import type { PageProps } from '../types/global/pageProps';
import { usePage } from '@inertiajs/react';
type PageInfo = {
    /** The canonical URL of the current page */
    canonicalUrl: string;
    /** The current page locale (e.g., 'en', 'pl') */
    locale: string;
};
/**
 * Hook to retrieve page information such as canonical URL and locale.
 * Use in Layout components to access page-specific data .
 *
 * @returns {PageInfo} An object containing the canonical URL and locale of the current page.
 
 */

function usePageInfo(): PageInfo {
    const { url, props: pageProps } = usePage<PageProps>();

    const base = pageProps.app_url ?? (import.meta.env.VITE_APP_URL as string);
    const canonicalUrl = base ? new URL(url, base).href : url;
    const locale = pageProps.locale ?? 'en';

    return { canonicalUrl, locale };
}

export default usePageInfo;
