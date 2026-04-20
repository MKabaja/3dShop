import { TRUST_BAR_ITEMS } from '../constants/trustbar';
import { useTranslation } from 'react-i18next';
import Separator from '@/shared/ui/Separator';
import { SquareCheckBig } from 'lucide-react';

function TrustBar() {
    const { t } = useTranslation('landing');

    return (
        <section
            aria-labelledby='trust-bar-heading'
            className='relative md:px-12 px-10 flex justify-center items-center flex-col my-10 md:my-22'
        >
            <h2 id='trust-bar-heading' className='sr-only'>
                {t('trustBar.heading')}
            </h2>
            <Separator size='sm' variant='decorative' className='inset-0' />
            <ul className='  md:grid md:grid-cols-4 flex flex-col py-2 md:items-start  gap-y-2'>
                {TRUST_BAR_ITEMS.map(({ id, labelKey }) => (
                    <li
                        key={id}
                        className='col-span-1  py-2 grid grid-cols-[auto_1fr]  items-center'
                    >
                        <SquareCheckBig
                            className='w-4 mr-3 text-accent-muted'
                            aria-hidden='true'
                        />
                        <span className='font-light text-xs text-text-muted'>
                            {t(labelKey)}
                        </span>
                    </li>
                ))}
            </ul>
            <Separator size='sm' variant='semantic' className='bottom-0' />
        </section>
    );
}

export default TrustBar;
