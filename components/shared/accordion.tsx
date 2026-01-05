import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type accordionValue = {
    title: string;
    text: string;
};

type accordionComponentProps = {
    accordions: accordionValue[];
    className?: string;
};

export default function AccordionComponent({
    accordions,
    className,
}: accordionComponentProps) {
    return (
        <Accordion
            type="single"
            collapsible
            className={`${className}`}
            defaultValue="item-1"
        >
            {accordions.map((accordion, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                    <AccordionTrigger>
                        <h4>{accordion.title}</h4>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>{accordion.text}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
