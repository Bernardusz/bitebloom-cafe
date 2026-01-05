"use client";
import { CarouselComponent } from "@/components/shared/carousel";
import ImageContainer from "@/components/shared/image";

export default function ClientCarouselImages({
    data,
}: {
    data: {
        src: string;
        alt: string;
    }[];
}) {
    return (
        <CarouselComponent hideOnDesktop className="basis-1/3 aspect-video">
            {data.map((product, index) => (
                <ImageContainer
                    className="w-full h-full"
                    key={index}
                    imageSrc={product.src}
                    imageAlt={product.alt}
                    rounded
                />
            ))}
        </CarouselComponent>
    );
}
