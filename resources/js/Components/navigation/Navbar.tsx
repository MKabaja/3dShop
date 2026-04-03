import type { PageProps } from "@/types/global/pageProps";
import type { UserRole } from "@/types/models";
import type { AuthVariant } from "./AuthMenu";

import Logo from "../ui/Logo";
import AuthMenu from "./AuthMenu";

import { usePage } from "@inertiajs/react";
import NavigationList from "./NavigationList";

type User = PageProps["auth"]["user"];

const USER_ROLE_TO_AUTH_VARIANT: Record<UserRole, AuthVariant> = {
    admin: "admin",
    client: "user",
};

export default function Navbar() {
    const { props: pageProps } = usePage<PageProps>();
    const user = pageProps.auth?.user;

    return (
        <nav className="flex px-8 py-1 relative bg-elevated  items-center border-b border-border ">
            {/* Logo & banner */}
            <Logo size="sm" />

            {/* Navigation */}
            <NavigationList />

            {/* guestMenu */}
            <AuthMenu
                variant={getAuthVariant(user)}
                initials={getUserInitials(user)}
            />
        </nav>
    );
}

function getAuthVariant(user: User | null): AuthVariant {
    if (!user) return "guest";
    return USER_ROLE_TO_AUTH_VARIANT[user.role as UserRole];
}

function getUserInitials(user: User | null): string | undefined {
    if (!user) return undefined;
    const names = user.name.split(" ");
    return names
        .map((n: string) => n[0])
        .join("")
        .toUpperCase();
}
