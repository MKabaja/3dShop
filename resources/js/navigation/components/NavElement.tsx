import type { NavigationLink } from "@shared/types/navigation/navbar";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { navVariants } from "@shared/constants/animations";

import { motion } from "framer-motion";

type NavElementProps = NavigationLink;

export default function NavElement({
    href,
    labelKey,
    ...props
}: NavElementProps) {
    const { t } = useTranslation();
    return (
        <motion.li
            className=" px-3 py-1 rounded transition-colors  cursor-pointer"
            {...props}
            variants={navVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            tabIndex={-1}
        >
            <Link href={href}>{t(labelKey)}</Link>
        </motion.li>
    );
}
