"use client";

import Link from "next/link";
import BiteBloomLogo from "@/components/shared/logo";
import { Menu } from "lucide-react";
import useSidebar from "@/context/useSidebar";
import ToggleMode from "@/components/shared/toggleMode";
import { useIsBelowXl } from "@/hooks/use-xl";

export default function Header() {
    const toggleSidebar = useSidebar((state) => state.toggleSidebar);
	const isBelowXl = useIsBelowXl()
    return (
        <header className="fixed top-0 left-0 z-50 h-24 w-full border bg-background px-8">
			{isBelowXl ? (
				<div className="flex w-full flex-row items-center justify-between">
					<Link href="/">
						<BiteBloomLogo className="text-foreground aspect-square h-16 w-16" />
					</Link>
					<Menu onClick={toggleSidebar} size={40}/>
				</div> 
			) : (
				<div className="relative flex h-full items-center">
    
					{/* LEFT */}
					<Link href="/" className="z-10">
					<BiteBloomLogo className="h-16 w-16" />
					</Link>

					{/* CENTER (TRUE CENTER) */}
					<nav className="absolute left-1/2 flex -translate-x-1/2 gap-6">
					<Link className="link-primary" href="/">Home</Link>
					<Link className="link-primary" href="/about">About</Link>
					<Link className="link-primary" href="/products">Products</Link>
					</nav>

					{/* RIGHT */}
					<div className="ml-auto flex items-center gap-4">
					<Link className="link-primary" href="/location">Location</Link>
					<Link className="link-primary" href="/contact">Contact</Link>
					<ToggleMode />
					</div>
				</div>
			)}
            
        </header>
    );
};
