import TitleSection from "@/components/shared/titleSection";
import { indexData } from "@/app/page";
import ClientCarouselImages from "@/components/sections/client/clientCarouselImages";
import TitleParagraph from "@/components/shared/titleParagraph";
import ServerImagesSection from "@/components/sections/server/serverImagesSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MeetingRoom() {
    return (
        <TitleSection
            title="Meeting Room"
            className="w-full flex flex-col gap-8"
        >
            <section className="w-full flex flex-col xl:flex-row gap-8">
                <div className="hidden xl:block h-fit w-1/2">
                    <ServerImagesSection data={indexData.meetingRoom} />
                </div>

                <div className="xl:hidden h-fit w-full">
                    <ClientCarouselImages data={indexData.meetingRoom} />
                </div>
                <TitleParagraph
                    className="xl:sticky top-24 h-fit xl:w-1/2"
                    title="A meeting room for your needs."
                    text="A calm, comfortable, and affordable meeting room designed for focused work, meaningful discussions, and collaboration—served with great coffee."
                />
            </section>
            <div className="flex flex-col w-full xl:flex-row gap-2">
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
        </TitleSection>
    );
}
