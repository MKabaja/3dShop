import type { PageProps } from "@shared/types/global/pageProps";
import type { UserRole, User } from "@shared/types/models";
import type { AuthVariant } from "./AuthMenu";

import Logo from "@shared/ui/Logo";
import AuthMenu from "./AuthMenu";
import MobileMenu from "./MobileMenu";

import { useTranslation } from "react-i18next";
import { usePage } from "@inertiajs/react";
import NavigationList from "./NavigationList";

const USER_ROLE_TO_AUTH_VARIANT: Record<UserRole, AuthVariant> = {
    admin: "admin",
    client: "user",
};

export default function Navbar() {
    const { t } = useTranslation();

    const { props: pageProps } = usePage<PageProps>();
    const user = pageProps.auth?.user;

    return (
        <nav
            className="flex px-8 py-1 relative bg-elevated items-center border-b border-border"
            aria-label={t("aria.navigation.main")}
        >
            <Logo size="sm" />

            <NavigationList />

            <MobileMenu />

            <AuthMenu
                variant={getAuthVariant(user)}
                initials={getUserInitials(user)}
            />
        </nav>
    );
}

function getAuthVariant(user: User | null): AuthVariant {
    if (!user) return "guest";
    return USER_ROLE_TO_AUTH_VARIANT[user.role];
}

function getUserInitials(user: User | null): string | undefined {
    if (!user) return undefined;
    const names = user.name.split(" ");
    return names
        .map((n: string) => n[0])
        .join("")
        .toUpperCase();
}
