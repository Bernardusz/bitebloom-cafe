"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import BiteBloomLogo from "@/components/shared/logo";
import { Menu } from "lucide-react";
import useSidebar from "@/context/useSidebar";
import ToggleMode from "@/components/shared/toggleMode";

export default function Header() {
    const toggleSidebar = useSidebar((state) => state.toggleSidebar);
    const isMobile = useIsMobile();

    return (
        <header className="bg-background text-foreground fixed top-0 left-0 z-50 flex h-24 w-full max-w-full flex-row items-center justify-between border px-8">
            <div className="flex w-full flex-row items-center justify-between">
                <Link href="/">
                    <BiteBloomLogo className="text-foreground aspect-square h-16 w-16" />
                </Link>
                <nav className="hidden flex-row gap-4 md:flex">
                    <Link className="link-primary" href="/">
                        Home
                    </Link>
                    <Link className="link-primary" href="/about">
                        About
                    </Link>
                    <Link className="link-primary" href="/products">
                        Products
                    </Link>
                </nav>
                <nav className="hidden flex-row gap-4 md:flex">
                    <Link className="link-primary" href="/location">
                        Location
                    </Link>
                    <Link className="link-primary" href="/contact">
                        Contact
                    </Link>
                </nav>
            </div>
            {!isMobile && <ToggleMode />}
            {isMobile && (
                <Menu
                    size={40}
                    className="hover:text-primary"
                    onClick={toggleSidebar}
                />
            )}
        </header>
    );
}
