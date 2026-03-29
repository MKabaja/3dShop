import { NavigationLink } from "@/types/navigation/navbar";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

type DropdownProps = {
    links: NavigationLink[];
};
export default function Dropdown({ links }: DropdownProps) {
    const { t } = useTranslation();
    return (
        <ul className="font-light text-xs absolute bg-card shadow-md rounded-md p-3 space-y-3">
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href}>{t(link.labelKey)}</Link>
                </li>
            ))}
        </ul>
    );
}
