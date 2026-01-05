import TitleSection from "@/components/shared/titleSection";
import IconTitleParagraph from "@/components/shared/IconTitleParagraph";
import { indexData } from "@/app/page";

export default function BenefitsSection(){
	return(
		<TitleSection
			title="Why choose us?"
			flexOrGrid="grid"
			noPadding
			className="bg-muted p-16 xl:grid-cols-4"
		>
			{indexData.whyChooseUs.map((reason, index) => (
				<IconTitleParagraph
					key={index}
					icon={reason.icon}
					title={reason.title}
					text={reason.text}
				/>
			))}
		</TitleSection>
	);
}