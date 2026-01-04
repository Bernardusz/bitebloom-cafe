import CallToAction from "@/components/sections/callToAction";
import { CarouselComponent } from "@/components/shared/carousel";
import ImageContainer from "@/components/shared/image";
import ProductsCard from "@/components/shared/productsCard";
import TitleParagraph from "@/components/shared/titleParagraph";
import TitleSection from "@/components/shared/titleSection";
import productsData from "@/data/products.json"

export default function Products() {
    return (
		<main>
			<section className="section flex flex-col xl:flex-row gap-8 items-start xl:items-center">
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
			<TitleSection
				title="Our best sellers"
			>
				<CarouselComponent hideOnDesktop>
					{productsData.bestSellers.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</CarouselComponent>
				<div className="hidden xl:grid grid-cols-4 gap-8">
					{productsData.bestSellers.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</div>
			</TitleSection>
			<TitleSection
				title="Pastries"
			>
				<CarouselComponent hideOnDesktop>
					{productsData.categories.pastries.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</CarouselComponent>
				<div className="hidden xl:grid grid-cols-4 gap-8">
					{productsData.categories.pastries.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</div>
			</TitleSection>
			<TitleSection
				title="Cakes"
			>
				<CarouselComponent hideOnDesktop>
					{productsData.categories.cakes.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</CarouselComponent>
				<div className="hidden xl:grid grid-cols-4 gap-8">
					{productsData.categories.cakes.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</div>
			</TitleSection>
						<TitleSection
				title="Coffee"
			>
				<CarouselComponent hideOnDesktop>
					{productsData.categories.coffees.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</CarouselComponent>
				<div className="hidden xl:grid grid-cols-4 gap-8">
					{productsData.categories.coffees.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</div>
			</TitleSection>
						<TitleSection
				title="Beverages"
			>
				<CarouselComponent hideOnDesktop>
					{productsData.categories.beverages.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</CarouselComponent>
				<div className="hidden xl:grid grid-cols-4 gap-8">
					{productsData.categories.beverages.map((product, index) => (
						<ProductsCard
							title={product.title}
							text={product.text}
							imageSrc={product.imageSrc}
							imageAlt={product.imageAlt}
							key={index}
							price={product.price}
							className="h-full"
						/>
					))}
				</div>
			</TitleSection>
			<CallToAction withoutSecondary={true}/>
		</main>
	);
}
