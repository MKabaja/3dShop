import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { logoVariants } from '@shared/constants/animations';

type SizeProp = 'sm' | 'md' | 'lg';
type SizeMap = Record<SizeProp, { svg: number; text: string }>;

const sizeMap: SizeMap = {
    sm: { svg: 32, text: 'text-xl' },
    md: { svg: 48, text: 'text-2xl' },
    lg: { svg: 64, text: 'text-4xl' },
};

type LogoProps = {
    size?: SizeProp;
    className?: string;
    color?: string;
};

export default function Logo({
    size = 'md',
    className = '',
    color = 'currentColor',
}: LogoProps) {
    return (
        <motion.div whileHover='hover' whileTap='tap' initial='initial'>
            <Link
                href='/'
                className={`${className} gap-3 items-center flex`}
                aria-label='PrintForge'
            >
                <motion.svg
                    variants={logoVariants}
                    xmlns='http://www.w3.org/2000/svg'
                    width={sizeMap[size].svg}
                    height={sizeMap[size].svg}
                    fill='none'
                    aria-hidden='true'
                    viewBox='0 0 1000 1000'
                    className='shrink-0  '
                >
                    <g clipPath='url(#a)'>
                        <path
                            fill={color}
                            d='m900 250-116 71.5L643.5 292v118.312L500 500l-143.5-89.5V292L216 321.5 100 250v-1.875L497 0h3zM101 447.5V330l116 72.5 90-18.814V485l-109 23zM100 645.5V528l116 72.5 90-18.814V683l-109 23zM900 447.5V330l-116 72.5-90-18.814V485l109 23zM900 645.5V528l-116 72.5-90-18.814V683l109 23z'
                        />
                        <path
                            fill={color}
                            d='M356 607.241v-117l142.5 89.5L643 489v116.741l-145 90.5z'
                        />
                        <path
                            fill={color}
                            d='M356 801.241v-117l142.5 89.5L643 683v116.741l-145 90.5z'
                        />

                        <path
                            stroke='#22d3ee'
                            strokeWidth='20'
                            fill='none'
                            d='m73.5 671.5-34 18.5 159 103.648 131.094-31.624v127.032L500 985l170.406-95.944V762.024L807.5 793.648 966.5 690l-32-18.5'
                        />
                    </g>
                    <defs>
                        <clipPath id='a'>
                            <path fill='#fff' d='M0 0h1000v1000H0z' />
                        </clipPath>
                    </defs>
                </motion.svg>
                <span
                    className={`text-gradient font-sans font-bold tracking-wider ${sizeMap[size].text} text-accent-deep`}
                >
                    PrintForge
                </span>
            </Link>
        </motion.div>
    );
}
