import HambuergerIcon from "../ui/HamburgerIcon";
import { useTranslation } from "react-i18next";
import { useDropdown } from "@/hooks/useDropdown";
import { AnimatePresence, motion } from "framer-motion";
import Overlay from "./Overlay";
import Dropdown from "./Dropdown";
import { NAVIGATION_LINKS } from "@/constants/navbar";
import { navVariants } from "@/constants/animations";
import useFocusReturn from "@/hooks/useFocusReturn";

import { useRef } from "react";

export default function MobileMenu() {
    const { t } = useTranslation();
    const { isOpen, toggle, close } = useDropdown();
    const buttonRef = useRef<HTMLButtonElement>(null);

    useFocusReturn(isOpen, buttonRef);

    return (
        <div className=" ml-auto flex  md:hidden">
            <motion.button
                ref={buttonRef}
                variants={navVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className=" text-text-secondary p-2"
                type="button"
                onClick={toggle}
                aria-label={
                    isOpen
                        ? t("aria.navigation.mobile.close")
                        : t("aria.navigation.mobile.open")
                }
                aria-haspopup="menu"
                aria-expanded={isOpen}
            >
                <HambuergerIcon />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <Overlay onClose={close} />
                        <Dropdown
                            links={NAVIGATION_LINKS}
                            isOpen={isOpen}
                            onClose={close}
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
