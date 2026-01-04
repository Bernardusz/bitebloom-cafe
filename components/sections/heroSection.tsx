import TitleParagraph from "@/components/shared/titleParagraph";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full h-[80vh] flex flex-col xl:flex-row justify-center items-center relative gap-8 xl:gap-0 mb-20">
            <div className="w-full xl:w-1/2 h-full relative">
                <Image
                    className="object-cover"
                    src="/images/index-hero.jpg"
                    alt="A here section image"
                    fill
                />
            </div>
            <div className="w-full xl:w-1/2 px-8 xl:px-24 flex flex-col gap-6">
				<TitleParagraph
					variant="h1"
					title="Bitebloom Cafe"
					text="A modern café focused on comfort, quality dining, and thoughtful amenities."
				/>
                <Link href="/products">
                    <Button className="btn-primary max-w-32 font-heading">
                        {" "}
                        Shop for coffee
                    </Button>
                </Link>
            </div>
        </section>
    );
}
