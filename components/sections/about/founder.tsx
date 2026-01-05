import ImageContainer from "@/components/shared/image";
import TitleParagraph from "@/components/shared/titleParagraph";
import IconTitleParagraph from "@/components/shared/IconTitleParagraph";
import { aboutData } from "@/app/about/page";

export default function FounderSection(){
	return(
		<section className="section flex flex-col xl:flex-row items-center gap-8 xl:gap-0">
						<ImageContainer
							imageSrc="/images/about-founder.jpg"
							imageAlt="founder's images"
							className="w-full xl:w-1/2 h-[70vh]"
							rounded
						/>
						<div className="w-full xl:w-1/2 flex flex-col justify-center items-center xl:p-16 gap-16">
							<TitleParagraph
								title="Meet Our Founder (Conceptual)"
								text="Founder is a fictional founder created for this portfolio project. Bitebloom Cafe is a conceptual brand designed to showcase UI/UX, frontend architecture, and product storytelling."
							/>
							<div className="grid gap-4 md:grid-cols-2">
								{aboutData.founderDatas.map((data, index) => (
									<IconTitleParagraph
										key={index}
										icon={data.icon}
										title={data.title}
										text={data.text}
									/>
								))}
							</div>
						</div>
					</section>
	);
}