import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import TitleParagraph from "@/components/shared/titleParagraph";
import { Quote, Star } from "lucide-react";

type testimonyCardProps = {
    title: string;
    text: string;
    name: string;
    role: string;
    rating: 1 | 2 | 3 | 4 | 5;
	className?: string
};

export default function TestimonyCard({
    title,
    text,
    rating,
    name,
    role,
	className
}: testimonyCardProps) {
    return (
        <Card
            className={`transition-transform duration-300 hover:scale-[1.03] ${className} p-8 place-items-start`}
        >
			<div className="flex items-center justify-start w-full">
				<Quote
					size={48}
					className="rotate-180"
				/>
			</div>
			<CardContent>
				<TitleParagraph
					title={title}
					text={text}
				/>
			</CardContent>
            <CardHeader className={`flex w-full justify-between gap-4`}>
                <div className="flex flex-col gap-2">
                    <CardTitle className="flex flex-row gap-0.5">
                        {Array.from({length: rating}).map((_, index) => (
							<Star
								key={index}
								size={16}
								fill="var(--foreground)"
							/>
						))}
                    </CardTitle>
                    <CardDescription>
						<p className="p-deemphasize">
							{name} - {role}
						</p>
                    </CardDescription>
                </div>
            </CardHeader>
			<div className="flex items-center justify-end w-full">
				<Quote
					size={48}
					className="justify-end text-right items-end"
				/>
			</div>
        </Card>
    );
}
