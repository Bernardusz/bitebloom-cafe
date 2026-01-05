import ImageContainer from "@/components/shared/image";
import TitleSection from "@/components/shared/titleSection";
import TitleParagraph from "@/components/shared/titleParagraph";

export default function BrandIdentitiy() {
    return (
        <TitleSection title="A freshly roasted coffee" flexOrGrid="flex">
            <div className="gap-8 xl:gap-16 items-start xl:items-center flex flex-col xl:flex-row h-100 w-full">
                <ImageContainer
                    imageSrc="/images/index-coffee.jpg"
                    imageAlt="An image of coffee"
                    className="h-full w-full"
                    rounded
                />
                <TitleParagraph
                    variant="h3"
                    title="Freshly Roasted. Thoughtfully Served."
                    text="Every cup at Bitebloom is crafted from freshly roasted beans, brewed with care in a space designed to slow you down and let you bloom."
                />
            </div>
        </TitleSection>
    );
}
