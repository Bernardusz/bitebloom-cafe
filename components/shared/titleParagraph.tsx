type paragraphProps = {
    title: string;
    text: string;
    className?: string;
    variant?: "h2" | "h3" | "h4";
};

export default function TitleParagraph({
    title,
    text,
    className,
    variant,
}: paragraphProps) {
    return (
        <div className={`flex flex-col justify-items-start gap-2 ${className}`}>
            {variant === "h2" ? (
                <h2 className="text-left">{title}</h2>
            ) : variant === "h3" ? (
                <h3 className="text-left">{title}</h3>
            ) : (
                <h4 className="text-left">{title}</h4>
            )}
            <p>{text}</p>
        </div>
    );
}
