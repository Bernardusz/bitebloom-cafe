import TitleSection from "@/components/shared/titleSection";
import { CarouselComponent } from "@/components/shared/carousel";
import { indexData } from "@/app/page";
import TestimonyCard from "@/components/shared/testimonyCard";

export default function TestimonySection() {
    return (
        <TitleSection
            title="Our Testimony"
            className="justify-center items-center w-full flex flex-col gap-8 xl:flex-row"
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
    );
}
