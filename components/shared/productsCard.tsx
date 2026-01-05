import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Euro } from "lucide-react";

export type mainCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    price: number;
    className?: string;
};

export default function ProductsCard({
    imageSrc,
    imageAlt,
    title,
    text,
    className,
    price,
    ...props
}: mainCardProps) {
    return (
        <Card
            {...props}
            className={`transition-transform duration-300 hover:scale-[1.03] ${className}`}
        >
            {imageSrc && (
                <CardContent>
                    <div className="aspect-video max-h-64 h-full w-full relative">
                        <Image
                            src={imageSrc}
                            alt={imageAlt ?? "an image"}
                            fill
                            className="object-cover"
                        />
                    </div>
                </CardContent>
            )}
            <CardHeader className={`flex w-full justify-between gap-4`}>
                <div className="flex flex-col gap-4">
                    <CardTitle>
                        <h4>{title}</h4>
                    </CardTitle>
                    <CardDescription>
                        <p>{text}</p>
                    </CardDescription>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <Euro size={32} />
                    <h2 className="font-heading">{price}</h2>
                </div>
            </CardHeader>
        </Card>
    );
}
