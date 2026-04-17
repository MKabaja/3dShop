import type {
    ReactNode,
    ElementType,
    ComponentPropsWithoutRef,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
} from "react";
import { Link } from "@inertiajs/react";

type Variants = "solid" | "outline";
type Sizes = "sm" | "md" | "lg";

type ButtonProps = {
    href?: string;
    variant?: Variants;
    size?: Sizes;
    label: string;
    className?: string;
};

export default function Button({
    href,
    variant = "solid",
    size = "md",
    label,
    className,
    ...rest
}: ButtonProps) {
    const classes = buttonClasses(variant, size);

    if (href) {
        return (
            <Link
                href={href}
                className={`${classes} ${className || ""}`}
                {...rest}
            >
                {label}
            </Link>
        );
    }

    return (
        <button className={`${classes} ${className || ""}`} {...rest}>
            {label}
        </button>
    );
}

function buttonClasses(variant: Variants, size: Sizes) {
    const baseClasses = "font-semibold transition duration-200 ";

    const variantClasses = {
        solid: "bg-accent-deep text-card hover:text-base hover:shadow-glow-strong hover:bg-accent-hover",
        outline:
            "border-soft  hover:border-text-muted glass text-text-secondary hover:text-text-primary ",
    };

    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-5 py-3 text-lg",
    };

    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
}
