import ImageContainer from "@/components/shared/image";
import TitleParagraph from "@/components/shared/titleParagraph";

export default function AboutHero() {
    return (
        <section className="section flex flex-col xl:flex-row gap-8 items-start xl:items-center">
            <ImageContainer
                imageSrc="/images/about-hero.jpg"
                imageAlt="Hero section's images"
                className="w-full xl:w-1/2 h-[60vh]"
                rounded
                eager
            />
            <div className="w-full xl:w-1/2 px-8 xl:px-24 flex flex-col gap-6">
                <TitleParagraph
                    variant="h1"
                    title="About Us"
                    text="An introduction to us, our owner and our team."
                />
            </div>
        </section>
    );
}
