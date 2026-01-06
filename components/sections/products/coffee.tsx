import TitleSection from "@/components/shared/titleSection";
import ServerGridSection from "@/components/sections/server/serverGrid";
import productsData from "@/data/products.json";
import ClientCarouselSection from "@/components/sections/client/clientCarousel";

export default function CoffeeSection() {
    return (
        <TitleSection title="Coffee">
            <div className="hidden xl:block">
                <ServerGridSection
                    productsData={productsData.categories.coffees}
                />
            </div>

            <div className="carousel-section">
                <ClientCarouselSection
                    productsData={productsData.categories.coffees}
                />
            </div>
        </TitleSection>
    );
}
