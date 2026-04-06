import { useEffect, useState, type RefObject } from "react";

type Action = "ArrowDown" | "ArrowUp";
type Actionfunction = (index: number, length: number) => number;

const actionStrategy: Record<Action, Actionfunction> = {
    ArrowDown: (index, length) => (index + 1) % length,
    ArrowUp: (index, length) => (index - 1 + length) % length,
};
function useRovingFocus<T extends HTMLElement>(
    containerRef: RefObject<T | null>,
    isOpen: boolean,
    selector = "a",
) {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!containerRef.current) return;

        const focusableElements: HTMLElement[] = Array.from(
            containerRef.current.querySelectorAll(selector),
        );

        const handleKeyDown = (e: KeyboardEvent) => {
            const allowedKeys: Action[] = ["ArrowDown", "ArrowUp"];

            if (!allowedKeys.includes(e.key as Action)) return;

            e.preventDefault();
            const action = e.key as Action;
            const nextIndex = actionStrategy[action](
                currentIndex,
                focusableElements.length,
            );
            setCurrentIndex(nextIndex);
            focusableElements[nextIndex]?.focus();
        };

        containerRef.current.addEventListener("keydown", handleKeyDown);
        return () => {
            containerRef.current?.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex, containerRef, selector]);
}

export default useRovingFocus;
