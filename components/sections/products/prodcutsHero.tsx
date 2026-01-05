import ImageContainer from "@/components/shared/image";
import TitleParagraph from "@/components/shared/titleParagraph";

export default function ProductsHero(){
	return(
		<section className="w-full h-fit flex flex-col xl:flex-row relative gap-8 section items-center justify-between">
                <ImageContainer
                    imageSrc="/images/products-hero.jpg"
                    imageAlt="Hero section's images"
                    className="w-full xl:w-1/2 h-[60vh]"
                    rounded
                />
                <div className="w-full xl:w-1/2 px-8 xl:px-24 flex flex-col gap-6">
                    <TitleParagraph
                        variant="h1"
                        title="Products"
                        text="Freshly baked pastries and carefully crafted drinks, made everyday."
                    />
                </div>
            </section>
	);
}