import type { ParseKeys } from 'i18next';

interface TrustBarItem {
    labelKey: ParseKeys<'landing'>;
    readonly id: string;
}

export const TRUST_BAR_ITEMS: TrustBarItem[] = [
    { labelKey: 'trustBar.items.freeQuote', id: 'free-quote' },
    { labelKey: 'trustBar.items.weDesign', id: 'we-design' },
    { labelKey: 'trustBar.items.fastProduction', id: 'fast-production' },
    { labelKey: 'trustBar.items.support', id: 'support' },
];
