import React from "react";
import TitleParagraph from "@/components/shared/titleParagraph";

type iconTitleParagraphProps = {
	className?: string
	icon: React.ReactNode
	title: string
	text: string
}

export default function IconTitleParagraph({title, text, icon, className}: iconTitleParagraphProps){
	return (
		<div className={`flex flex-row gap-4 items-start ${className}`}>
			{icon}
			<TitleParagraph
				className="w-full max-w-72"
				title={title}
				text={text}
			/>
		</div>
	);
}