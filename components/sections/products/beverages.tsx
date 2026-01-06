import TitleSection from "@/components/shared/titleSection";
import ServerGridSection from "@/components/sections/server/serverGrid";
import productsData from "@/data/products.json";
import ClientCarouselSection from "@/components/sections/client/clientCarousel";

export default function BeveragesSection() {
    return (
        <TitleSection title="Beverages">
            <div className="hidden xl:block">
                <ServerGridSection
                    productsData={productsData.categories.beverages}
                />
            </div>

            <div className="carousel-section">
                <ClientCarouselSection
                    productsData={productsData.categories.beverages}
                />
            </div>
        </TitleSection>
    );
}
