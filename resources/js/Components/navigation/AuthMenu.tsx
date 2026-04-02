import { type ReactNode } from "react";
import UserPortraitButton from "./UserPortraitButton";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import GuestIcon from "../ui/GuestIcon";
import Dropdown from "./Dropdown";
import type { NavigationLink } from "@/types/navigation/navbar";
import { AUTH_LINKS, USER_LINKS, ADMIN_LINKS } from "@/constants/navbar";
import { useDropdown } from "@/hooks/useDropdown";

type AuthVariant = "guest" | "user" | "admin";
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
        <div className="relative">
            <UserPortraitButton
                isOpen={isOpen}
                arrowColor="#67e8f9"
                className="text-accent-muted hover:bg-hover"
                onClick={toggle}
            >
                {strategyMap[variant].content(initials)}
            </UserPortraitButton>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {createPortal(
                            <motion.div
                                key="backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10"
                                onClick={close}
                            />,
                            document.getElementById("portal-root") ??
                                document.body,
                        )}
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
