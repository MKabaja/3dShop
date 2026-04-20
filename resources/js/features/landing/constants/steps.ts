import type { ParseKeys } from 'i18next';

export interface StepItem {
    id: string;
    labelKey: ParseKeys<'landing'>;
    descriptionKey: ParseKeys<'landing'>;
}

export const STEP_ITEMS: StepItem[] = [
    {
        id: 'idea',
        labelKey: 'howItWorks.steps.idea.title',
        descriptionKey: 'howItWorks.steps.idea.description',
    },
    {
        id: 'design',
        labelKey: 'howItWorks.steps.design.title',
        descriptionKey: 'howItWorks.steps.design.description',
    },
    {
        id: 'deliver',
        labelKey: 'howItWorks.steps.deliver.title',
        descriptionKey: 'howItWorks.steps.deliver.description',
    },
] as const;
