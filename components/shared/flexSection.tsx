import type React from "react";

export default function FlexSection({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={`flex min-h-60 w-full max-w-1000 flex-1 flex-col justify-center gap-8 md:gap-24 xl:flex-row xl:gap-8 ${className}`}
        >
            {children}
        </section>
    );
}
