import { useTranslation } from 'react-i18next';
import Container from '@/shared/ui/Container';
import Separator from '@/shared/ui/Separator';
import SectionHeader from '@/features/landing/components/SectionHeader';
import { STEP_ITEMS, type StepItem } from '../constants/steps';

export default function HowItWorks() {
    const { t } = useTranslation('landing');
    const id = 'how-it-works-heading';

    return (
        <Container aria-labelledby={id}>
            <SectionHeader
                id={id}
                label='howItWorks'
                title={t('howItWorks.title')}
                subtitle={t('howItWorks.subtitle')}
                centered
            />
            <ol className='col-span-full mt-10 flex flex-col gap-y-6 md:grid md:grid-cols-3 md:gap-12'>
                {STEP_ITEMS.map((step: StepItem, index: number) => (
                    <li
                        key={step.id}
                        className='flex flex-col gap-5  px-5 py-8 text-center '
                    >
                        <div className='md:mx-auto flex h-11 w-11 items-center justify-center  border border-glow bg-card text-text-accent'>
                            <span
                                className='font-mono text-sm font-semibold tracking-wide'
                                aria-hidden='true'
                            >
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                        <h3 className='text-cards tracking-widest text-text-primary '>
                            {t(step.labelKey)}
                        </h3>

                        <p className='font-sans flex-1 text-sm font-light leading-relaxed tracking-wide text-text-muted md:text-md'>
                            {t(step.descriptionKey)}
                        </p>
                    </li>
                ))}
            </ol>
            <Separator
                size='sm'
                variant='semantic'
                className='bottom-0 left-0'
            />
        </Container>
    );
}
