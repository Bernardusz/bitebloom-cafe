import CallToAction from "@/components/sections/callToAction";
import AccordionComponent from "@/components/shared/accordion";
import IconTitleParagraph from "@/components/shared/IconTitleParagraph";
import ImageContainer from "@/components/shared/image";
import TitleParagraph from "@/components/shared/titleParagraph";
import TitleSection from "@/components/shared/titleSection";
import { Book, ChefHat, Coffee, Croissant, Euro, Heart, Smile } from "lucide-react";

const aboutData = {
	founderDatas: [
		{
			icon:<Euro size={48}/>,
			title:"Rooted in Local Culture",
			text:"Inspired by Central European café traditions and community-driven spaces."
		},
		{
			icon:<Book size={48}/>,
			title:"Classical Culinary Training",
			text:"Influenced by European culinary schools and modern café craftsmanship."
		},
		{
			icon:<ChefHat size={48}/>,
			title:"Industry Experience",
			text:"Shaped by years of experience in hospitality, fine dining, and café operations."
		},
		{
			icon:<Croissant size={48}/>,
			title:"The Birth of Bitebloom",
			text:"A concept café blending warmth, craftsmanship, and contemporary design."
		},
	],
	teamDatas: [
		{
			icon:<Coffee size={48}/>,
			title:"Coffee Craftsmanship",
			text:"Trained in specialty brewing methods and café service excellence.",
		},
		{
			icon:<Croissant size={48}/>,
			title:"Pastry & Presentation",
			text:"Influenced by European culinary schools and modern café craftsmanship.",

		},
		{
			icon:<Smile size={48}/>,
			title:"Customer Experience.",
			text:"Warm, attentive, and community-oriented service culture.",

		},
		{
			icon:<Heart size={48}/>,
			title:"Shared Values",
			text:"Sustainability, learning, and continuous improvement.",
		}

	],
	historyDatas: [
		{
			title:"A Simple Idea",
			text:"Bitebloom began as a concept inspired by slow mornings, thoughtful conversations, and the comfort of a well-brewed cup of coffee.",
		},
		{
			title:"Inspired by European Café Culture",
			text:"The brand draws inspiration from European cafés that value atmosphere, craftsmanship, and community over speed and excess.",
		},
		{
			title:"Designed for People",
			text:"From focused work sessions to relaxed meetings, Bitebloom is imagined as a space that adapts to the rhythm of everyday life."
		},
		{
			title:"A Modern Café Experience",
			text:"Bitebloom represents a balance of affordability, quality, and calm—crafted as a modern café concept in the heart of Debrecen."
		}
	]
}

export default function About() {
    return (
        <main className="page">
			<section className="section flex flex-col xl:flex-row gap-8 items-start xl:items-center">
				<ImageContainer
					imageSrc="/images/about-hero.jpg"
					imageAlt="Hero section's images"
					className="w-full xl:w-1/2 h-[60vh]"
					rounded
				/>
				<TitleParagraph
					variant="h1"
					title="About Us"
					text="An introduction to us, our owner and our team."
				/>
			</section>
			<section className="section flex flex-col xl:flex-row items-center">
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
			<CallToAction/>
		</main>
    );
}
