import ArrowIcon from "../ui/ArrowIcon";

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
            className={`flex items-center space-x-2 ${className} relative`}
            {...props}
        >
            {children}
            <ArrowIcon
                size={arrowSize * 0.6}
                color={arrowColor}
                aria-hidden="true"
                className="absolute right-0 top-0 bg-surface"
            />
        </button>
    );
}
