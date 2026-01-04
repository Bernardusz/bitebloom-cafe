type paragraphProps = {
    title: string;
    text: string;
    className?: string;
    variant?: "h1" | "h2" | "h3" | "h4";
};

export default function TitleParagraph({
    title,
    text,
    className,
    variant = "h3",
}: paragraphProps) {
	const Tag = variant
    return (
        <div className={`flex flex-col justify-items-start gap-2 ${className}`}>
            <Tag className="text-left">{title}</Tag>
			<p>{text}</p>
        </div>
    );
}
