import CallToAction from "@/components/sections/callToAction";
import BestSellers from "@/components/sections/index/bestSellers";
import BeveragesSection from "@/components/sections/products/beverages";
import CakesSection from "@/components/sections/products/cakes";
import CoffeeSection from "@/components/sections/products/coffee";
import PastriesSection from "@/components/sections/products/pastries";
import ProductsHero from "@/components/sections/products/prodcutsHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Explore BiteBloom Café’s pastries, cakes, and specialty coffee—crafted for everyday moments.",
    openGraph: {
        title: "Products | BiteBloom Café",
        description:
            "Explore pastries, cakes, and specialty coffee at BiteBloom Café.",
        images: ["/images/products-hero.jpg"],
    },
};

export type product = {
    title: string;
    text: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
};

export type productsProps = {
    productsData: product[];
};

export default function Products() {
    return (
        <main className="page">
            <ProductsHero />
            <BestSellers />
            <PastriesSection />
            <CakesSection />
            <CoffeeSection />
            <BeveragesSection />
            <CallToAction withoutSecondary={true} />
        </main>
    );
}
