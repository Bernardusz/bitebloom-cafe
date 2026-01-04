import BiteBloomLogo from "@/components/shared/logo";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="flex w-full flex-col items-center justify-center border-y mt-20">
            <div className="mt-4 flex w-full max-w-400 flex-col justify-center gap-4 p-12">
                <div className="flex h-fit w-full flex-col gap-6 xl:flex-row">
                    <div className="flex flex-col gap-2 xl:w-1/2">
                        <div className="flex flex-row items-center justify-start gap-2">
                            <BiteBloomLogo className="text-foreground aspect-square size-10" />
                            <h4>Bitebloom Cafe</h4>
                        </div>
                        <p>
                            A modern café focused on comfort, quality dining,
                            and thoughtful amenities.
                        </p>
                    </div>
                    <div className="flex flex-col justify-between gap-8 md:w-full md:flex-row xl:w-1/2 xl:gap-16 xl:px-16">
                        <div className="flex flex-col gap-4">
                            <h4>About</h4>
                            <nav>
                                <ul className="flex flex-col justify-center gap-1">
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/about"
                                        >
                                            Owner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/about"
                                        >
                                            Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/about"
                                        >
                                            History
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/about"
                                        >
                                            Vision
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4>Products</h4>
                            <nav>
                                <ul className="flex flex-col justify-center gap-1">
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/products"
                                        >
                                            Best Sellers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/products"
                                        >
                                            Pastry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/products"
                                        >
                                            Cakes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/products"
                                        >
                                            Drinks
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4>Visit Us</h4>
                            <nav>
                                <ul className="flex flex-col justify-center gap-1">
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/location"
                                        >
                                            Location
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-foreground"
                                            href="/contact"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="mt-8 border-t pt-8 text-center md:text-left">
                    <p>
                        © 2025 Bitebloom Cafe •{" "}
                        <Link href="/credits" className="link-primary">
                            Image Credits
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
