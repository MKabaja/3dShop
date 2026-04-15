import { useCallback, useEffect, useState } from "react";
import { router } from "@inertiajs/react";

export function useNavbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen((v) => !v);
    const close = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        const handleRouteChange = () => close();
        const remove = router.on("start", handleRouteChange);

        return () => {
            remove();
        };
    }, [close]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [close]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return { isOpen, toggle, close };
}
