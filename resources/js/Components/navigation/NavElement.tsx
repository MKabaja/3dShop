import type { NavigationLink } from "@/types/navigation/navbar";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

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
            whileHover={{
                color: "#f1f5f9",
                backgroundColor: "#0f172a",
                transition: { type: "tween", ease: "easeInOut", duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            <Link href={href}>{t(labelKey)}</Link>
        </motion.li>
    );
}
