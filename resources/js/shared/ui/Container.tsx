import { type ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
    "aria-labelledby"?: string;
};

/**
 * A reusable container component for consistent layout and spacing across the landing page. It applies a grid layout on medium screens and above, and provides padding and margin for proper spacing. The `className` prop allows for additional styling when needed.
 */
export default function Container({
    children,
    className,
    "aria-labelledby": ariaLabelledby,
}: ContainerProps) {
    return (
        <section
            aria-labelledby={ariaLabelledby}
            className={`md:grid md:grid-cols-4 relative flex flex-col items-start justify-start md:px-12  px-10 md:my-22  my-10 md:space-y-10 space-y-5 ${className || ""}`}
        >
            {children}
        </section>
    );
}
