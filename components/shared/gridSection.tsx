import type React from "react";

export default function GridSection({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={`grid min-h-60 w-full grid-cols-1 justify-between gap-6 md:grid-cols-2 md:gap-12 xl:gap-8 ${className}`}
        >
            {children}
        </section>
    );
}
