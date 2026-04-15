type IconWrapperProps = {
    children: React.ReactNode;
    size?: number;
    className?: string;
};

export default function IconWrapper({
    children,
    size = 24,
    className,
}: IconWrapperProps) {
    return (
        <div
            style={{ width: size, height: size }}
            className={`flex items-center justify-center ${className}`}
        >
            {children}
        </div>
    );
}
