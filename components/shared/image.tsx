import clsx from "clsx";
import Image from "next/image";

type imageContainerProps = {
    imageSrc: string;
    imageAlt: string;
    className?: string;
    rounded?: boolean;
    eager?: boolean;
};

export const defaultImageClass = "w-full xl:w-1/2 relative aspect-4/3";

export default function ImageContainer({
    imageSrc,
    imageAlt,
    className,
    rounded,
    eager,
}: imageContainerProps) {
    return (
        <div className={className + " relative"}>
            <Image
                loading={eager ? "eager" : "lazy"}
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="100%"
                className={clsx({
                    "object-cover": true,
                    "rounded-xl": rounded,
                })}
            />
        </div>
    );
}
