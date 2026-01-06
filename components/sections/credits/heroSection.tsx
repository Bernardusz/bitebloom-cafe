import TitleParagraph from "@/components/shared/titleParagraph";

export default function CreditsHero() {
    return (
        <section className="section mt-20 flex justify-center items-center">
            <TitleParagraph
                variant="h1"
                title="Credits"
                text="I'm thankful for all these people. Thank you for your awesome and incredible images!"
                className="text-center items-center justify-center max-w-2/3"
            />
        </section>
    );
}
