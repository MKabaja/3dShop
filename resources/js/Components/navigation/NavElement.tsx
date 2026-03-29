import type { NavigationLink } from "@/types/navigation/navbar";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import type { ComponentPropsWithoutRef } from "react";

type NavElementProps = { isText?: boolean } & NavigationLink &
    Omit<ComponentPropsWithoutRef<"li">, "id">;

export default function NavElement({
    href,
    labelKey,
    ...props
}: NavElementProps) {
    const { t } = useTranslation();
    return (
        <li {...props}>
            <Link href={href}>{t(labelKey)}</Link>
        </li>
    );
}
