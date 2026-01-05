import ImageContainer from "@/components/shared/image"
import TitleParagraph from "@/components/shared/titleParagraph"
import { aboutData } from "@/app/about/page"
import IconTitleParagraph from "@/components/shared/IconTitleParagraph"

export default function TeamSection(){
	return(
		<section className="section flex flex-col gap-8 items-start">
                <ImageContainer
                    imageSrc="/images/about-team.jpg"
                    imageAlt="Team image"
                    className="w-full aspect-4/3 max-h-100"
                    rounded
                />

                <div className="flex flex-col xl:flex-row gap-8">
                    <TitleParagraph
                        variant="h3"
                        title="Our team"
                        className="xl:max-w-5/10"
                        text="Bitebloom is imagined as a collaborative space powered by skilled baristas, pastry enthusiasts, and hospitality professionals who care deeply about craft and community."
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                        {aboutData.teamDatas.map((data, index) => (
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
	)
}