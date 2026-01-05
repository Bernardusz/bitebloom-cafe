import AboutHero from "@/components/sections/about/aboutHero";
import FounderSection from "@/components/sections/about/founder";
import HistorySection from "@/components/sections/about/history";
import TeamSection from "@/components/sections/about/team";
import CallToAction from "@/components/sections/callToAction";
import {
    Book,
    ChefHat,
    Coffee,
    Croissant,
    Euro,
    Heart,
    Smile,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
 description: "Learn about BiteBloom Café’s fictional origins, values, and team.", 
  openGraph: {
    title: "Products | BiteBloom Café",
    description: "Learn about BiteBloom Café’s fictional origins, values, and team.",
	images: ["/images/about-hero.jpg"],
  },
};

export const aboutData = {
    founderDatas: [
        {
            icon: <Euro size={48} />,
            title: "Rooted in Local Culture",
            text: "Inspired by Central European café traditions and community-driven spaces.",
        },
        {
            icon: <Book size={48} />,
            title: "Classical Culinary Training",
            text: "Influenced by European culinary schools and modern café craftsmanship.",
        },
        {
            icon: <ChefHat size={48} />,
            title: "Industry Experience",
            text: "Shaped by years of experience in hospitality, fine dining, and café operations.",
        },
        {
            icon: <Croissant size={48} />,
            title: "The Birth of Bitebloom",
            text: "A concept café blending warmth, craftsmanship, and contemporary design.",
        },
    ],
    teamDatas: [
        {
            icon: <Coffee size={48} />,
            title: "Coffee Craftsmanship",
            text: "Trained in specialty brewing methods and café service excellence.",
        },
        {
            icon: <Croissant size={48} />,
            title: "Pastry & Presentation",
            text: "Influenced by European culinary schools and modern café craftsmanship.",
        },
        {
            icon: <Smile size={48} />,
            title: "Customer Experience.",
            text: "Warm, attentive, and community-oriented service culture.",
        },
        {
            icon: <Heart size={48} />,
            title: "Shared Values",
            text: "Sustainability, learning, and continuous improvement.",
        },
    ],
    historyDatas: [
        {
            title: "A Simple Idea",
            text: "Bitebloom began as a concept inspired by slow mornings, thoughtful conversations, and the comfort of a well-brewed cup of coffee.",
        },
        {
            title: "Inspired by European Café Culture",
            text: "The brand draws inspiration from European cafés that value atmosphere, craftsmanship, and community over speed and excess.",
        },
        {
            title: "Designed for People",
            text: "From focused work sessions to relaxed meetings, Bitebloom is imagined as a space that adapts to the rhythm of everyday life.",
        },
        {
            title: "A Modern Café Experience",
            text: "Bitebloom represents a balance of affordability, quality, and calm—crafted as a modern café concept in the heart of Debrecen.",
        },
    ],
};

export default function About() {
    return (
        <main className="page">
            <AboutHero/>
            <FounderSection/>
            <TeamSection/>
            <HistorySection/>
            <CallToAction />
        </main>
    );
}
