import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { colors } from '../constants/colors';

type BadgeProps = {
    label: string;
};

export default function Badge({ label }: BadgeProps) {
    const { accentMuted, accentDeep, accentLight } = colors;
    return (
        <div className=' inline-block px-2 py-1   shadow-xl  '>
            <motion.span
                className=' text-accent-light mx-1 font-bold text-md '
                animate={{
                    color: [accentMuted, accentDeep, accentLight, accentMuted],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                {'# '}
            </motion.span>
            <span className='text-gradient-badge uppercase   text-sm '>
                {label}
            </span>
        </div>
    );
}
