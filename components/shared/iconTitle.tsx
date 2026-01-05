import React from "react";

type iconTitleProps = {
    className?: string;
    icon: React.ReactNode;
    title: string;
    variant?: "h1" | "h2" | "h3" | "h4";
};

export default function IconTitle({
    title,
    icon,
    className,
    variant = "h4",
}: iconTitleProps) {
    const Tag = variant;
    return (
        <div className={`flex flex-row gap-2 items-center ${className}`}>
            <div className="p-2 rounded-full bg-muted">{icon}</div>

            <Tag className="break-all">{title}</Tag>
        </div>
    );
}
