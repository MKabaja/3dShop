import { type ReactNode } from "react";
import type { NavigationLink } from "@/types/navigation/navbar";
import GuestIcon from "../ui/GuestIcon";
import Dropdown from "./Dropdown";
import UserPortraitButton from "./UserPortraitButton";

import Overlay from "./Overlay";
import { AnimatePresence } from "framer-motion";
import { AUTH_LINKS, USER_LINKS, ADMIN_LINKS } from "@/constants/navbar";
import { useDropdown } from "@/hooks/useDropdown";

export type AuthVariant = "guest" | "user" | "admin";
type AuthMenuProps = {
    variant: AuthVariant;
    initials?: string;
};

type InitialsStrategy = (initials?: string) => ReactNode;

type StrategyMap = Record<
    AuthVariant,
    {
        content: InitialsStrategy;
        links: NavigationLink[];
    }
>;

const strategyMap: StrategyMap = {
    guest: {
        content: () => <GuestIcon />,
        links: AUTH_LINKS,
    },
    user: {
        content: (initials?) => getInitials(initials),
        links: USER_LINKS,
    },
    admin: {
        content: (initials?) => getInitials(initials),
        links: ADMIN_LINKS,
    },
};

export default function AuthMenu({ initials, variant }: AuthMenuProps) {
    const { isOpen, close, toggle } = useDropdown();

    return (
        <div className="relative ml-5">
            <UserPortraitButton
                isOpen={isOpen}
                arrowColor="#0891b2"
                className="text-accent-muted "
                onClick={toggle}
            >
                {strategyMap[variant].content(initials)}
            </UserPortraitButton>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <Overlay onClose={close} />
                        <Dropdown links={strategyMap[variant].links} />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

function getInitials(initials?: string): ReactNode {
    if (!initials) return null;
    return <span>{initials}</span>;
}
