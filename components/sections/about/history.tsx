import TitleSection from "@/components/shared/titleSection";
import ImageContainer from "@/components/shared/image";
import AccordionComponent from "@/components/shared/accordion";
import { aboutData } from "@/app/about/page";

export default function HistorySection(){
	return (
		<TitleSection
                title="History of our Cafe"
                className="flex flex-col xl:flex-row items-center gap-8"
            >
                <ImageContainer
                    imageSrc="/images/about-history.jpg"
                    imageAlt="Cafe atmosphere"
                    className="w-full aspect-square max-h-100 xl:w-1/2"
                    rounded
                />
                <AccordionComponent
                    accordions={aboutData.historyDatas}
                    className="w-full xl:w-1/2"
                />
            </TitleSection>
	);
}