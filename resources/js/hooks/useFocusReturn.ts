import { useEffect, useRef, type RefObject } from "react";

function useFocusReturn<T extends HTMLElement>(
    isOpen: boolean,
    triggerRef: RefObject<T | null>,
) {
    const preIsOpenRef = useRef<boolean>(isOpen);

    useEffect(() => {
        if (preIsOpenRef.current && !isOpen && triggerRef?.current) {
            triggerRef.current.focus();
        }
        preIsOpenRef.current = isOpen;
    }, [isOpen]);
}

export default useFocusReturn;
