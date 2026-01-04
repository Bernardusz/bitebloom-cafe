import clsx from "clsx";
import Image from "next/image"

type imageContainerProps = {
	imageSrc: string
	imageAlt: string
	className?: string
	rounded?: boolean
}

export const defaultImageClass = "w-full xl:w-1/2 relative aspect-4/3";

export default function ImageContainer({
	imageSrc, imageAlt, className, rounded
}: imageContainerProps){
	return (
		<div className={className}>
			<Image
				src={imageSrc}
				alt={imageAlt}
				fill
				className={clsx({
					"object-cover": true,
					"rounded-xl": rounded
				})}
			/>
		</div>
	);
}