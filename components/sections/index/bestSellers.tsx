import TitleSection from "@/components/shared/titleSection";
import ServerGridSection from "@/components/sections/server/serverGrid";
import productsData from "@/data/products.json";
import ClientCarouselSection from "@/components/sections/client/clientCarousel";

export default function BestSellers() {
    return (
        <TitleSection title="Our best sellers">
            <div className="hidden xl:block">
                <ServerGridSection productsData={productsData.bestSellers} />
            </div>

            <div className="xl:hidden">
                <ClientCarouselSection
                    productsData={productsData.bestSellers}
                />
            </div>
        </TitleSection>
    );
}
