import { NavigationLink } from "@/types/navigation/navbar";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { itemVariants, dropdownVariants } from "@/constants/animations";
import useRovingFocus from "@/hooks/useRovingFocus";
import { useRef, type FocusEvent } from "react";

type DropdownProps = {
    links: NavigationLink[];
    isOpen: boolean;
    onClose?: () => void;
};
export default function Dropdown({ links, isOpen, onClose }: DropdownProps) {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLUListElement>(null);

    useRovingFocus(containerRef, isOpen);
    const onBlur = (e: FocusEvent<HTMLUListElement>) => {
        if (!e.currentTarget?.contains(e.relatedTarget)) {
            onClose?.();
        }
    };

    const classes =
        "font-light text-xs absolute right-0 top-full bg-card shadow-md rounded-md px-3 py-4 pr-12 z-50";
    return (
        <motion.ul
            role="menu"
            variants={dropdownVariants}
            ref={containerRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${classes} flex flex-col space-y-4`}
            onBlur={onBlur}
        >
            {links.map((link) => (
                <motion.li
                    key={link.href}
                    variants={itemVariants}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 28,
                    }}
                >
                    <Link
                        href={link.href}
                        role="menuitem"
                        className=" px-2 py-1 rounded hover:text-text-primary hover:bg-elevated transition-colors"
                    >
                        {t(link.labelKey)}
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
    );
}
