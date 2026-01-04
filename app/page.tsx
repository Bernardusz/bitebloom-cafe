import CallToAction from "@/components/sections/callToAction";
import HeroSection from "@/components/sections/heroSection";
import { CarouselComponent } from "@/components/shared/carousel";
import IconTitleParagraph from "@/components/shared/IconTitleParagraph";
import ImageContainer, { defaultImageClass } from "@/components/shared/image";
import MainCard from "@/components/shared/mainCard";
import TestimonyCard from "@/components/shared/testimonyCard";
import TitleParagraph from "@/components/shared/titleParagraph";
import TitleSection from "@/components/shared/titleSection";
import { Button } from "@/components/ui/button";
import { Armchair, Coffee, Croissant, Euro } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const indexData = {
	bestSellers: [
		{
			title:"Butter Croissant",
			text:"A freshly baked, crisp, and buttery croissant.",
			imageSrc:"/images/croissant.jpg",
			imageAlt:"An image of Croissant",
			type:"flex-col",
		},
		{
			title:"Pain Au Chocolat",
			text: "A warm, buttery, and flaky pain au chocolat with rich chocolate that melts in your mouth.",
			imageSrc:"/images/pain-au-chocolat.jpg",
			imageAlt:"An image of Pain Au Chocolat",
			type:"flex-col",
		},
		{
			title:"Opera Cake",
			text:"A rich blend of chocolate and coffee layered into pure happiness.",
			imageSrc:"/images/opera-cake.jpg",
			imageAlt:"An image of Opera Cake",
			type:"flex-col",
		},
		{
			title:"Latte",
			text:"A creamy, smooth, and comforting coffee to start your day right.",
			imageSrc:"/images/latte.jpg",
			imageAlt:"An image of Latte",
			type:"flex-col",
		},
		
	],
	meetingRoom: [
		{
			src:"/images/index-meeting-room.jpg",
			alt:"An image of the meeting room",
		},
		{
			src:"/images/index-meeting-room-2.jpg",
			alt:"An image of the meeting room",
		},
		{
			src:"/images/index-meeting-room-3.jpg",
			alt:"An image of the meeting room",

		}
	],
	whyChooseUs: [
		{
			icon: <Coffee size={48}/>,
			title:"A Freshly roasted coffee",
			text:"Freshly roasted coffee every morning, made from high-quality beans to bring out the best flavors.",
		},
		{
			icon: <Croissant size={48}/>,
			title:"Tasty and delicious pastry",
			text:"Our pastries are crafted with great attention to taste, texture, and presentation."
		},
		{
			icon: <Euro size={48}/>,
			title:"Affordable foods",
			text:"Delicious food doesn’t have to be expensive. We keep our menu affordable so both you—and your wallet—can enjoy life."
		},
		{
			icon: <Armchair size={48}/>,
			title:"Top tier dining experience",
			text:"A top-tier dining experience, guaranteed. Fast Wi-Fi, comfortable seating, great coffee, and a welcoming atmosphere."
		},
	],
	testimony: [
		{
			title:"Absolutely stunning!",
			text:"The place was amazing! It has a nice atmosphere, friendly staff, and a really great dining experience, overall 5/5! Would visit again!",
			name:"Bernardusz",
			role:"A software engineer",
			rating:5,
		},
		{
			title:"The Coffee is tasty",
			text:"There's a wide range of coffee variety from lattee to Americano, and all of them are delicious.",
			name:"Stanislaus",
			role:"A business manager",
			rating:4,
		},
		{
			title:"The pastry are delicious!",
			text:"There are just so many pastries and all of them are delicious! Pain au Chocolat, Bagguete and Croissant, all are delicious!",
			name:"Anna",
			role:"An HR manager",
			rating:5,
		},
		{
			title: "The menu is so affordable.",
			text: "Man, I never thought i would be able to afford delicious pastries and coffee as a college student, but Bitebloom proved me wrong!",
			name: "Christian",
			role: "A college student",
			rating: 5
		}
	]
}

export default function Home() {
    return (
        <main className="page">
            <HeroSection />
            <TitleSection title="A freshly roasted coffee" flexOrGrid="flex">
                <div className="gap-8 xl:gap-16 items-start xl:items-center flex flex-col xl:flex-row h-100 w-full">
                    <div className="relative h-full w-full">
                        <Image
                            src="/images/index-coffee.jpg"
                            alt="An image of coffee"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <TitleParagraph
                        variant="h4"
                        title="Freshly Roasted. Thoughtfully Served."
                        text="Every cup at Bitebloom is crafted from freshly roasted beans, brewed with care in a space designed to slow you down and let you bloom."
                    />
                </div>
            </TitleSection>
            <TitleSection title="Our Best Sellers" centeredTitle>
                <CarouselComponent className="gap-4">
					{indexData.bestSellers.map((bestSeller, index) => (
						<MainCard
							key={index}
							title={bestSeller.title}
							text={bestSeller.text}
							imageSrc={bestSeller.imageSrc}
							imageAlt={bestSeller.imageAlt}
							type={bestSeller.type as "flex-col" | "flex-row"} 
							className="w-full h-full"
						/>
					))}
                </CarouselComponent>
            </TitleSection>
            <TitleSection
                title="Meeting Room"
                className="w-full flex flex-col gap-8 xl:flex-row"
            >
                <CarouselComponent hideOnDesktop>
					{indexData.meetingRoom.map((image, index) => (
						<ImageContainer
							key={index}
							imageSrc={image.src}
							imageAlt={image.alt}
							className={defaultImageClass}
							rounded
						/>
					))}
                </CarouselComponent>
                <div className="hidden xl:flex flex-col w-full h-fit gap-8">
					{indexData.meetingRoom.map((image, index) => (
						<ImageContainer
							key={index}
							imageSrc={image.src}
							imageAlt={image.alt}
							className="w-full relative aspect-4/3"
							rounded
						/>
					))}
				</div>
				<TitleParagraph
					className="xl:sticky top-24 h-fit"
					title="A meeting room for your needs."
					text="A calm, comfortable, and affordable meeting room designed for focused work, meaningful discussions, and collaboration—served with great coffee."
				/>
            </TitleSection>
            <div className="flex flex-col w-full xl:flex-row -mt-16 gap-2">
				<Link
					href="/contact"
					className="w-full px-10 xl:px-16 justify-center items-center flex"
				>
					<Button className="btn-primary w-full">
						Book one now!
					</Button>
				</Link>
				<Link
					href="/contact"
					className="w-full xl:px-16 justify-center items-center flex px-10"
				>
					<Button variant="secondary" className="btn-primary w-full">
						Learn more
					</Button>
				</Link>
			</div>
            <TitleSection
                title="Why choose us?"
                flexOrGrid="grid"
                noPadding
                className="bg-muted p-16 xl:grid-cols-4"
            >
				{indexData.whyChooseUs.map((reason, index) => (
					<IconTitleParagraph
						key={index}
						icon={reason.icon}
						title={reason.title}
						text={reason.text}
					/>
				))}
            </TitleSection>
			<TitleSection
                title="Our Testimony"
                className="w-full flex flex-col gap-8 xl:flex-row"
				paragraph="Don't just take our words, take theirs as well!"
            >
                <CarouselComponent>
					{indexData.testimony.map((testimony, index) => (
						<TestimonyCard
							key={index}
							title={testimony.title}
							text={testimony.text}
							name={testimony.name}
							role={testimony.role}
							rating={testimony.rating as 1 | 2 | 3 | 4 | 5}
							className="h-full"
						/>
					))}
                </CarouselComponent>
			</TitleSection>
			<CallToAction/>
        </main>
    );
}
