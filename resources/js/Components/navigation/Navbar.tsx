import { NAVIGATION_LINKS, AUTH_LINKS } from "@/constants/navbar";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import NavElement from "./NavElement";
import AuthMenu from "./AuthMenu";
import UserPortraitButton from "./UserPortraitButton";

export default function Navbar() {
    const { t } = useTranslation();
    return (
        <nav className="flex  px-8 py-5 relative">
            {/* Logo & bannner */}
            <div>PrintForge</div>

            {/* Naviagtion */}
            <ul className=" flex mx-auto space-x-3">
                {NAVIGATION_LINKS.map((item) => (
                    <NavElement
                        key={item.id}
                        labelKey={item.labelKey}
                        href={item.href}
                    />
                ))}
            </ul>
            {/* guestMenu */}
            <AuthMenu variant="guest" />
        </nav>
    );
}
