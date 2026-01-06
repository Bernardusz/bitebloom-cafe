import CallToAction from "@/components/sections/callToAction";
import BenefitsSection from "@/components/sections/index/benefits";
import BestSellers from "@/components/sections/index/bestSellers";
import BrandIdentitiy from "@/components/sections/index/brandIdentity";
import HeroSection from "@/components/sections/index/heroSection";
import MeetingRoom from "@/components/sections/index/meetingRoom";
import TestimonySection from "@/components/sections/index/testimony";
import { Armchair, Coffee, Croissant, Euro } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    description:
        "A fictional artisan café serving specialty coffee and pastries in Debrecen.",
    openGraph: {
        title: "BiteBloom Café",
        description:
            "A fictional artisan café serving specialty coffee and pastries in Debrecen.",
        images: ["/images/index-hero.jpg"],
    },
};

export const indexData = {
    bestSellers: [
        {
            title: "Butter Croissant",
            text: "A freshly baked, crisp, and buttery croissant.",
            imageSrc: "/images/croissant.jpg",
            imageAlt: "An image of Croissant",
            type: "flex-col",
        },
        {
            title: "Pain Au Chocolat",
            text: "A warm, buttery, and flaky pain au chocolat with rich chocolate that melts in your mouth.",
            imageSrc: "/images/pain-au-chocolat.jpg",
            imageAlt: "An image of Pain Au Chocolat",
            type: "flex-col",
        },
        {
            title: "Opera Cake",
            text: "A rich blend of chocolate and coffee layered into pure happiness.",
            imageSrc: "/images/opera-cake.jpg",
            imageAlt: "An image of Opera Cake",
            type: "flex-col",
        },
        {
            title: "Latte",
            text: "A creamy, smooth, and comforting coffee to start your day right.",
            imageSrc: "/images/latte.jpg",
            imageAlt: "An image of Latte",
            type: "flex-col",
        },
    ],
    meetingRoom: [
        {
            src: "/images/index-meeting-room.jpg",
            alt: "An image of the meeting room",
        },
        {
            src: "/images/index-meeting-room-2.jpg",
            alt: "An image of the meeting room",
        },
        {
            src: "/images/index-meeting-room-3.jpg",
            alt: "An image of the meeting room",
        },
    ],
    whyChooseUs: [
        {
            icon: <Coffee size={48} />,
            title: "A Freshly roasted coffee",
            text: "Freshly roasted coffee every morning, made from high-quality beans to bring out the best flavors.",
        },
        {
            icon: <Croissant size={48} />,
            title: "Tasty and delicious pastry",
            text: "Our pastries are crafted with great attention to taste, texture, and presentation.",
        },
        {
            icon: <Euro size={48} />,
            title: "Affordable foods",
            text: "Delicious food doesn’t have to be expensive. We keep our menu affordable so both you—and your wallet—can enjoy life.",
        },
        {
            icon: <Armchair size={48} />,
            title: "Top tier dining experience",
            text: "A top-tier dining experience, guaranteed. Fast Wi-Fi, comfortable seating, great coffee, and a welcoming atmosphere.",
        },
    ],
    testimony: [
        {
            title: "Absolutely stunning!",
            text: "The place was amazing! It has a nice atmosphere, friendly staff, and a really great dining experience, overall 5/5! Would visit again!",
            name: "Bernardusz",
            role: "A software engineer",
            rating: 5,
        },
        {
            title: "The Coffee is tasty",
            text: "There's a wide range of coffee variety from lattee to Americano, and all of them are delicious.",
            name: "Stanislaus",
            role: "A business manager",
            rating: 4,
        },
        {
            title: "The pastry are delicious!",
            text: "There are just so many pastries and all of them are delicious! Pain au Chocolat, Bagguete and Croissant, all are delicious!",
            name: "Anna",
            role: "An HR manager",
            rating: 5,
        },
        {
            title: "The menu is so affordable.",
            text: "Man, I never thought i would be able to afford delicious pastries and coffee as a college student, but Bitebloom proved me wrong!",
            name: "Christian",
            role: "A college student",
            rating: 5,
        },
    ],
};

export default function Home() {
    return (
        <main className="page">
            <HeroSection />
            <BrandIdentitiy />
            <BestSellers />
            <MeetingRoom />
            <BenefitsSection />
            <TestimonySection />
            <CallToAction />
        </main>
    );
}
