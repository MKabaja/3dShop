import NavElement from "./NavElement";
import { NAVIGATION_LINKS } from "@/constants/navbar";

export default function NavigationList() {
    return (
        <ul className="hidden md:flex mx-auto md:space-x-2 text-text-secondary xl:text-lg xl:space-x-4">
            {NAVIGATION_LINKS.map((item) => (
                <NavElement
                    key={item.id}
                    labelKey={item.labelKey}
                    href={item.href}
                />
            ))}
        </ul>
    );
}
