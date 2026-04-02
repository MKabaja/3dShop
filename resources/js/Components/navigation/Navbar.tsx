import { NAVIGATION_LINKS } from "@/constants/navbar";
import Logo from "../ui/Logo";
import { useTranslation } from "react-i18next";
import NavElement from "./NavElement";
import AuthMenu from "./AuthMenu";

export default function Navbar() {
    const { t } = useTranslation();
    return (
        <nav className="flex  px-8 py-1 relative bg-elevated  items-center border-b border-border">
            {/* Logo & bannner */}
            <Logo size="lg" color="#22d3ee" />

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
