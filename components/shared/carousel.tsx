"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsBelowXl } from "@/hooks/use-xl";

export function CarouselComponent({
    className,
    hideOnDesktop,
    children,
}: {
    hideOnDesktop?: boolean;
    className?: string;
    children: React.ReactNode;
}) {
    const isBelowXl = useIsBelowXl();
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    if (hideOnDesktop) {
        return (
            isBelowXl && (
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className={className}>
                        {React.Children.map(children, (child, index) => (
                            <CarouselItem key={index} className="md:basis-1/2">
                                {child}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            )
        );
    }
    return (
        <Carousel
            opts={{
                align: "center",
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className={className}>
                {React.Children.map(children, (child, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        {child}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
