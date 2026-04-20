import Badge from './Badge';

type SectionProps = {
    id: string;
    title: string;
    subtitle?: string;
    centered?: boolean;

    label?: string;
};

export default function SectionHeader({
    id,
    label,
    title,
    subtitle,
    centered = false,
}: SectionProps) {
    return (
        <div
            className={`mt-5 space-y-5  ${centered ? 'mx-auto text-center col-span-4' : 'col-span-3'}`}
        >
            {label && <Badge label={label} />}
            <h2 id={id} className=' font-normal text-section tracking-tight'>
                {title}
            </h2>
            {subtitle && (
                <p className='my-8 text-text-muted italic md:text-md text-sm'>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
