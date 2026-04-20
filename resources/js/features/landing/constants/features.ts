import type { ParseKeys } from 'i18next';
import type { LucideIcon } from 'lucide-react';
import { DraftingCompass, Cog, Handshake } from 'lucide-react';

export interface FeatureItem {
    labelKey: ParseKeys<'landing'>;
    id: string;
    descriptionKey: ParseKeys<'landing'>;
    icon: LucideIcon;
}
/**
 * These are the features that will be displayed in the FeaturesSection component.
 * Each feature has a label, description, and an icon.
 * The label and description are keys that will be used to fetch the actual text from the translation files.
 */
export const FEATURE_ITEMS: FeatureItem[] = [
    {
        id: 'design',
        labelKey: 'features.items.design.title',
        descriptionKey: 'features.items.design.description',
        icon: DraftingCompass,
    },
    {
        id: 'printing',
        labelKey: 'features.items.printing.title',
        descriptionKey: 'features.items.printing.description',
        icon: Cog,
    },
    {
        id: 'support',
        labelKey: 'features.items.support.title',
        descriptionKey: 'features.items.support.description',
        icon: Handshake,
    },
] as const;
