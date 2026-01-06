import TitleSection from "@/components/shared/titleSection";
import ServerGridSection from "@/components/sections/server/serverGrid";
import productsData from "@/data/products.json";
import ClientCarouselSection from "@/components/sections/client/clientCarousel";

export default function CakesSection() {
    return (
        <TitleSection title="Cakes">
            <div className="hidden xl:block">
                <ServerGridSection
                    productsData={productsData.categories.cakes}
                />
            </div>

            <div className="carousel-section">
                <ClientCarouselSection
                    productsData={productsData.categories.cakes}
                />
            </div>
        </TitleSection>
    );
}
