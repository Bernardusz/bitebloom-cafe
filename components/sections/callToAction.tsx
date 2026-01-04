import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import TitleParagraph from "@/components/shared/titleParagraph";
export default function CallToAction (){
    return (
        <div className="flex flex-col xl:flex-row w-full h-140 px-16 gap-8 xl:gap-0">
			<div className="relative h-full w-full xl:w-1/2">
				<Image
					src="/images/cta.jpg"
					alt="An image of coffee"
					fill
					className="object-cover rounded-xl"
				/>
			</div>
            <div className="w-full xl:w-1/2 flex justify-center items-center flex-col gap-4">
				<div className="flex flex-col max-w-100">
					<TitleParagraph
						title="Tasty, Delicious, and Affordable"
						variant="h2"
						text="Visit us in the heart of Debrecen to fully experience Bitebloom yourself!"
					/>
            	</div>
            <div className="flex w-full flex-row justify-center gap-12 px-8">
                <Link href="/location">
					<Button
						className="btn-primary"
					>
						Visit us
					</Button>
				</Link>
				<Link href="/">
					<Button
						variant="secondary"
                    	className="btn-primary"
                	>
                    Learn more
                </Button>
				</Link>
            </div>
			</div>
        </div>
    );
};