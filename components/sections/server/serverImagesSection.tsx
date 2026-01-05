import ImageContainer from "@/components/shared/image";

export default function ServerImagesSection({
    data,
}: {
    data: {
        src: string;
        alt: string;
    }[];
}) {
    return (
        <div className="hidden xl:flex flex-col w-full h-fit gap-8">
            {data.map((image, index) => (
                <ImageContainer
                    key={index}
                    imageSrc={image.src}
                    imageAlt={image.alt}
                    className="w-full relative aspect-4/3"
                    rounded
                />
            ))}
        </div>
    );
}
