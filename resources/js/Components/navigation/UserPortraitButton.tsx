import ArrowIcon from "../ui/ArrowIcon";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type UserPortraitButtonProps = {
    isOpen?: boolean;
    arrowSize?: number;
    arrowColor?: string;
    children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function UserPortraitButton({
    isOpen = false,
    arrowSize = 16,
    arrowColor = "currentColor",
    className,
    children,
    ...props
}: UserPortraitButtonProps) {
    const { t } = useTranslation();
    return (
        <button
            type="button"
            aria-label={t("aria.navigation.user")}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            className={`flex items-center p-2 rounded ${className} relative`}
            {...props}
        >
            {children}
            <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                className="absolute right-1 top-1 "
            >
                <ArrowIcon
                    size={arrowSize * 0.6}
                    color={arrowColor}
                    aria-hidden="true"
                />
            </motion.span>
        </button>
    );
}
