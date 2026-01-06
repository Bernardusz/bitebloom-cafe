import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/header";
import { ClientInitializer } from "@/components/layout/clientProvider";
import Footer from "@/components/layout/footer";
import Sidebar from "@/components/layout/sidebar";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://bitebloom-cafe.vercel.app"),

    title: {
        default: "BiteBloom Café",
        template: "%s | BiteBloom Café",
    },

    description:
        "BiteBloom Café is a fictional artisan café serving pastries, cakes, and specialty coffee in Debrecen.",

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        type: "website",
        siteName: "BiteBloom Café",
    },

    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} font-body antialiased max-w-[100vw]`}
            >
                <Header />
                <ClientInitializer />
                <Sidebar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
