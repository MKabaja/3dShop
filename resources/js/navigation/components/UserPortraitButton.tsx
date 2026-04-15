import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import ArrowIcon from "@shared/ui/ArrowIcon";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type UserPortraitButtonProps = {
    isOpen?: boolean;
    arrowSize?: number;
    arrowColor?: string;
    children: ReactNode;
} & HTMLMotionProps<"button">;

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
        <motion.button
            whileHover={{
                color: "#06b6d4",
                backgroundColor: "#0f172a",
                transition: { type: "tween", ease: "easeInOut", duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
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
                transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                className="absolute right-1 top-1 "
            >
                <ArrowIcon
                    size={arrowSize * 0.6}
                    color={arrowColor}
                    aria-hidden="true"
                />
            </motion.span>
        </motion.button>
    );
}
