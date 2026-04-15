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
    duration: 0.2,
};
/**
 * Logo animation variants.
 *
 * On hover: scales up to 1.2 and rotates 10 degrees.
 * On tap: scales down to 0.9 and rotates -2 degrees.
 * Transitions use the defined `springTransition` for a bouncy effect.
 * Initial state is scale 1 and rotate 0.
 */
const logoVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.2,
        rotate: 10,
        transition: { duration: 0.3 },
    },
    tap: {
        scale: 0.9,
        rotate: -2,
        transition: { ...springTransition },
    },
};
const navVariants: Variants = {
    initial: {
        color: "#94a3b8",
        backgroundColor: "transparent",
        scale: 1,
    },
    hover: {
        color: "#f1f5f9",
        backgroundColor: "#0f172a",
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.1,
        },
    },
    tap: {
        scale: 0.9,
    },
};

export {
    containerVariants,
    itemVariants,
    dropdownVariants,
    springTransition,
    logoVariants,
    navVariants,
};
