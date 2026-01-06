import CreditsSection from "@/components/sections/credits/creditsSection";
import CreditsHero from "@/components/sections/credits/heroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Credits",
    robots: {
        index: false,
    },
    openGraph: {
        title: "Credits | BiteBloom Café",
    },
};

export default function Credits() {
    return (
        <main className="page">
            <CreditsHero />
            <CreditsSection />
        </main>
    );
}
