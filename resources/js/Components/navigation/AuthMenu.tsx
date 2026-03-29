import { type ReactNode, useState } from "react";
import UserPortraitButton from "./UserPortraitButton";
import Guesticon from "../ui/GuestIcon";
import Dropdown from "./Dropdown";
import type { NavigationLink } from "@/types/navigation/navbar";
import { AUTH_LINKS, USER_LINKS, ADMIN_LINKS } from "@/constants/navbar";

type AuthMenuProps = {
    variant: AuthVariant;
    initials?: string;
};
export type AuthVariant = "guest" | "user" | "admin";

export default function AuthMenu({ initials, variant }: AuthMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <menu className="relative">
            <div className=" p-2 ">
                <UserPortraitButton
                    isOpen={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {getContentByVariant(variant, initials)}
                </UserPortraitButton>
            </div>
            {isOpen && <Dropdown links={getLinksByVariant(variant)} />}
        </menu>
    );
}

function getLinksByVariant(variant: AuthVariant): NavigationLink[] {
    switch (variant) {
        case "guest":
            return AUTH_LINKS;
        case "user":
            return USER_LINKS;
        case "admin":
            return ADMIN_LINKS;
    }
}

function getContentByVariant(
    variant: AuthVariant,
    initials?: string,
): ReactNode {
    switch (variant) {
        case "guest":
            return <Guesticon />;
        case "user":
        case "admin":
            return initials ? <span>{initials}</span> : <span>{""}</span>;
    }
}
