import { NavigationLink } from "@/types/navigation/navbar";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { itemVariants, dropdownVariants } from "@/constants/animations";

type DropdownProps = {
    links: NavigationLink[];
};
export default function Dropdown({ links }: DropdownProps) {
    const { t } = useTranslation();
    const classes =
        "font-light text-xs absolute right-0 top-full bg-card shadow-md rounded-md px-3 py-4 pr-12 z-50";
    return (
        <motion.ul
            role="menu"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes}
        >
            <motion.div
                variants={dropdownVariants}
                className="flex flex-col space-y-4"
            >
                {links.map((link) => (
                    <motion.li
                        role="menuitem"
                        key={link.href}
                        variants={itemVariants}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 28,
                        }}
                    >
                        <Link href={link.href}>{t(link.labelKey)}</Link>
                    </motion.li>
                ))}
            </motion.div>
        </motion.ul>
    );
}
