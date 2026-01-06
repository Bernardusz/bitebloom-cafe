import ImageContainer from "@/components/shared/image";
import TitleParagraph from "@/components/shared/titleParagraph";
import { MapPin, Mail, Clock, Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import IconTitle from "@/components/shared/iconTitle";

export default function ContactSection() {
    return (
        <section className="w-full h-fit flex flex-col xl:flex-row relative gap-8 section items-center justify-between">
            <ImageContainer
                className="w-full xl:w-1/2 h-80 xl:h-105"
                imageSrc="/images/location-interior.jpg"
                imageAlt="A here section image"
                rounded
                eager
            />
            <div className="flex flex-col gap-8 w-full xl:max-w-1/2">
                <TitleParagraph
                    variant="h1"
                    title="Location"
                    text="We are located in the heart of Debrecen (fictional), serving pastries and coffees for you."
                />
                <div className="flex flex-col gap-4 border-b pb-8">
                    <IconTitle
                        icon={<MapPin />}
                        title="Debrecen, Hungary (Fictional)"
                    />
                    <IconTitle icon={<Mail />} title="fictional@gmail.com" />
                    <IconTitle icon={<Clock />} title="08:00 – 19:00" />
                </div>

                <div className="flex gap-6 justify-center text-muted-foreground">
                    <Link href="#" aria-label="Instagram">
                        <Instagram />
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                        <Linkedin />
                    </Link>
                    <a
                        href="https://github.com/Bernardusz/bitebloom-cafe"
                        target="_blank"
                        rel="noopener"
                        aria-label="GitHub"
                    >
                        <Github />
                    </a>
                </div>
            </div>
        </section>
    );
}
