"use client";

import BiteBloomLogo from "@/components/shared/logo";
import ToggleMode from "@/components/shared/toggleMode";
import useSidebar from "@/context/useSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import clsx from "clsx";
import Link from "next/link";
import {
    Croissant,
    MapPin,
    Armchair,
    Instagram,
    Linkedin,
    Github,
} from "lucide-react";

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebar();
    const isMobile = useIsMobile();
    return (
        isMobile && (
            <div
                className={clsx({
                    "flex fixed inset-0 z-50 top-0 w-full right-0 transition-transform duration-500": true,
                    "translate-x-0": isOpen,
                    "translate-x-full": !isOpen,
                })}
            >
                <div
                    className="w-[20vw] opacity-30 bg-accent"
                    onClick={toggleSidebar}
                />
                <aside className="flex flex-col gap-8 p-8 w-[82vw] bg-sidebar justify-between">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row w-full justify-between gap-4 items-center ">
                                <div className="flex flex-row w-full justify-start gap-2 items-center">
                                    <BiteBloomLogo className="size-12" />
                                    <h4>Bitebloom Cafe</h4>
                                </div>
                                <ToggleMode />
                            </div>
                            <p>A warm place to gather and bloom</p>
                        </div>
                        <nav className="flex flex-col gap-4">
                            <div className="flex flex-col gap-3">
                                <p className="p-deemphasize">Primary</p>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link href="/location">Location</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="p-deemphasize">Secondary</p>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h4>Find Us</h4>
                                <hr className="w-full" />
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <Link
                                    className="flex flex-row gap-2 items-center"
                                    href="/products"
                                >
                                    <Croissant size={20} />
                                    <p>View Best Sellers</p>
                                </Link>
                                <Link
                                    className="flex flex-row gap-2 items-center"
                                    href="/location"
                                >
                                    <MapPin size={20} />
                                    <p>Find Us in Debrecen</p>
                                </Link>
                                <Link
                                    className="flex flex-row gap-2 items-center"
                                    href="/contact"
                                >
                                    <Armchair size={20} />
                                    <p>Book a Meeting Room</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <p>Bitebloom Cafe</p>
                            <hr className="w-full" />
                        </div>
                        <p className="p-deemphasize">
                            In Debrecen city center, near university of Debrecen
                        </p>
                        <hr className="w-full" />
                        <div className="flex flex-row gap-8 px-4 w-full justify-center">
                            <Link href="#">
                                <Instagram className="hover:text-primary transition-colors" />
                            </Link>
                            <Link href="#">
                                <Linkedin className="hover:text-primary transition-colors" />
                            </Link>
                            <a
                                target="_blank"
                                rel="noopener"
                                href="https://github.com/Bernardusz/bitebloom-cafe"
                            >
                                <Github className="hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        )
    );
}
