import ImageContainer from "@/components/shared/image";
import TitleParagraph from "@/components/shared/titleParagraph";

export default function Home() {
    return (
		<main>
			<section className="section flex flex-col xl:flex-row gap-8 items-center">
				<ImageContainer
					imageSrc="/images/about-hero.jpg"
					imageAlt="Hero section's images"
					className="w-full xl:w-1/2 h-[60vh]"
					rounded
				/>
				<TitleParagraph
					variant="h1"
					title="Products"
					text="Freshly baked pastries and carefully crafted drinks, made everyday."
				/>
			</section>
		</main>
	);
}
