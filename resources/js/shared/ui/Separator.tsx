type SeparatorSize = 'sm' | 'md' | 'lg';
type SeparatorVariant = 'semantic' | 'decorative';

type SeparatorProps = {
    size: SeparatorSize;
    variant?: SeparatorVariant;
    className?: string;
};

const heightClasses: Record<SeparatorSize, string> = {
    sm: 'h-px',
    md: 'h-0.5',
    lg: 'h-1',
};

export default function Separator({
    size,
    variant = 'decorative',
    className,
}: SeparatorProps) {
    const baseClasses = 'w-full absolute divider-fade';
    return variant === 'semantic' ? (
        <hr
            className={` ${baseClasses} ${heightClasses[size]} ${className || ''}`}
        ></hr>
    ) : (
        <div
            aria-hidden='true'
            className={` ${baseClasses} ${heightClasses[size]} ${className || ''}`}
        ></div>
    );
}
