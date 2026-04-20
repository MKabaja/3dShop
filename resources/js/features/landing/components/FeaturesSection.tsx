import SectionHeader from '@/features/landing/components/SectionHeader';
import { useTranslation } from 'react-i18next';
import Container from '@/shared/ui/Container';
import Separator from '@/shared/ui/Separator';
import { FEATURE_ITEMS, type FeatureItem } from '../constants/features';

export default function FeaturesSection() {
    const { t } = useTranslation('landing');
    const id = 'features-heading';

    return (
        <Container aria-labelledby={id}>
            <SectionHeader
                id={id}
                title={t('features.title')}
                subtitle={t('features.subtitle')}
                label={t('features.badge')}
            />
            <ul className='col-span-full md:grid md:grid-cols-3 md:gap-8 flex flex-col gap-y-8 mt-10 justify-between'>
                {FEATURE_ITEMS.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <li
                            key={feature.id}
                            className=' border border-glow flex flex-col px-5 py-8   text-center glass-strong card-noise  rounded-sm  shadow-neuro-inset '
                        >
                            <div className='relative flex flex-col  space-y-4 min-h-30'>
                                <div className='mx-auto w-fit p-3 rounded-lg bg-accent/10'>
                                    <Icon
                                        className='text-text-accent'
                                        aria-hidden='true'
                                    />
                                </div>
                                <h3 className=' tracking-widest text-cards text-text-primary font-semibold  uppercase'>
                                    {t(feature.labelKey)}
                                </h3>
                                <Separator
                                    size='sm'
                                    variant='decorative'
                                    className='bottom-0 '
                                />
                            </div>

                            <p className=' leading-relaxed flex-1 tracking-wide mt-8 text-text-secondary  font-thin md:text-md text-sm  text-center'>
                                {t(feature.descriptionKey)}
                            </p>
                        </li>
                    );
                })}
            </ul>
            <Separator
                size='sm'
                variant='semantic'
                className='bottom-0 left-0'
            />
        </Container>
    );
}
