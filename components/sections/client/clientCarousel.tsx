"use client";
import { product } from "@/app/products/page";
import { CarouselComponent } from "@/components/shared/carousel";
import ProductsCard from "@/components/shared/productsCard";

export default function ClientCarouselSection({
    productsData,
}: {
    productsData: product[];
}) {
    return (
        <CarouselComponent hideOnDesktop>
            {productsData.map((product, index) => (
                <ProductsCard
                    title={product.title}
                    text={product.text}
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                    key={index}
                    price={product.price}
                    className="h-full"
                />
            ))}
        </CarouselComponent>
    );
}
