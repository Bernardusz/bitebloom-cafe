import ContactSection from "@/components/sections/find-us/heroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Find Us",
    description:
        "Location, opening hours, and contact details for BiteBloom Café (fictional).",
    openGraph: {
        title: "Products | BiteBloom Café",
        description:
            "Location, opening hours, and contact details for BiteBloom Café (fictional).",
        images: ["/images/interior-location.jpg"],
    },
};

export default function Contact() {
    return (
        <main className="page">
            <ContactSection />
        </main>
    );
}
