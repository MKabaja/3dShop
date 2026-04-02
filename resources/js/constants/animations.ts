import type { Variants, Transition } from "framer-motion";
/**
 * List container variant — does not animate itself,
 * it only orchestrates children via `staggerChildren`.
 *
 * `staggerChildren: 0.05` means each following child
 * starts its animation 50ms after the previous one.
 */
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.05 },
    },
    exit: {},
};

/**
 * Variant for a single list item.
 * Inherits state ("hidden" / "visible" / "exit") from parent
 * `containerVariants` — you don't need to set `animate` on every
 * `<motion.li>` individually, just set `initial` and `animate` on the parent.
 *
 * Animates: 6px left shift + fade on enter/exit.
 */
const itemVariants: Variants = {
    hidden: { opacity: 0, x: -6 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -6 },
};
/**
 * Dropdown container variant (`<ul>` container).
 * Appears with a slight scale down (scale 0.95 → 1)
 * and 120px rightward move — creating a "pop" effect.
 */

const dropdownVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 60 },
    visible: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.9, x: 20 },
};
/**
 * Spring transition configuration.
 *
 * `stiffness: 350` — how stiff the spring is. Higher = faster movement.
 * `damping: 25`    — oscillation damping. Higher = less bounce at the end.
 *
 * `type: "spring" as const` is required — without it TS infers `string`
 * instead of a literal and framer-motion throws a type error.
 */
const springTransition: Transition = {
    type: "spring",
    stiffness: 350,
    damping: 25,
};

export { containerVariants, itemVariants, dropdownVariants, springTransition };
