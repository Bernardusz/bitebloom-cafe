import FlexSection from "@/components/shared/flexSection";
import GridSection from "@/components/shared/gridSection";
import TitleParagraph from "@/components/shared/titleParagraph";
import clsx from "clsx";
import React from "react";

type titleSectionProps = {
    title: string;
    paragraph?: string;
    children: React.ReactNode;
    className?: string;
    centeredTitle?: boolean;
    flexOrGrid?: "flex" | "grid";
    sectionClassname?: string;
    noPadding?: boolean;
};

export default function TitleSection({
    title,
    noPadding,
    sectionClassname,
    flexOrGrid,
    centeredTitle,
    paragraph,
    children,
    className,
}: titleSectionProps) {
    return (
        <section
            className={`${noPadding ? "max-w-400 py-12 md:py-16 relative w-full" : "section"} flex flex-col w-full gap-4 ${sectionClassname}`}
        >
            {paragraph ? (
                <TitleParagraph
                    variant="h3"
                    title={title}
                    text={paragraph}
                    className={clsx({
                        "pl-8 md:pl-12": noPadding,
                    })}
                />
            ) : (
                <h3
                    className={`${centeredTitle && "text-center"} ${noPadding ? "pl-8 md:px-12" : ""}`}
                >
                    {title}
                </h3>
            )}
            {flexOrGrid ? (
                flexOrGrid === "grid" ? (
                    <GridSection className={className}>{children}</GridSection>
                ) : (
                    <FlexSection className={className}>{children}</FlexSection>
                )
            ) : (
                <div className={className}>{children}</div>
            )}
        </section>
    );
}
