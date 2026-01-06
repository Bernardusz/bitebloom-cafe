import { Card, CardHeader } from "@/components/ui/card";

const credits = [
    <p key={0}>
        Photo by Lisa from Pexels:{" "}
        <a href="https://www.pexels.com/photo/leather-chairs-in-restaurant-2193600/">
            https://www.pexels.com/photo/leather-chairs-in-restaurant-2193600/
        </a>
    </p>,
    <p key={1}>
        Photo by{" "}
        <a href="https://unsplash.com/@moisamihai092?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Mihai Moisa
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/black-chairs-Djtc1T38-GY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={2}>
        Photo by{" "}
        <a href="https://unsplash.com/@kjrai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Kavita Joshi Rai
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/croissant-on-top-of-stainless-steel-tray-lE5O9DktAQY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={3}>
        Photo by{" "}
        <a href="https://unsplash.com/@minkmingle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Mink Mingle
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/close-up-photography-of-baked-treats-on-tray-qZ5lPCPvdXE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={4}>
        Photo by Alina Matveycheva:{" "}
        <a href="https://www.pexels.com/photo/sweet-cakes-and-coffee-on-table-20818064/">
            https://www.pexels.com/photo/sweet-cakes-and-coffee-on-table-20818064/
        </a>
    </p>,
    <p key={5}>
        Photo by{" "}
        <a href="https://unsplash.com/@tabithaturnervisuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            tabitha turner
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/white-ceramic-cup-with-saucer-on-brown-wooden-table-3n3mPoGko8g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={6}>
        <a href="https://www.freepik.com/free-photo/happy-colleagues-sitting-near-coffee-while-work-with-laptops_8073011.htm#fromView=search&page=1&position=2&uuid=d38e89d7-407a-41c7-a413-7c5778707e56&query=cafe+meeting+room">
            Image by drobotdean on Freepik
        </a>
    </p>,
    <p key={7}>
        <a href="https://www.freepik.com/free-photo/concentrated-young-woman-drinking-coffee-working_8072942.htm">
            Image by drobotdean on Freepik
        </a>
    </p>,
    <p key={8}>
        <a href="https://www.freepik.com/free-photo/3d-rendering-business-meeting-room-office-building_18320767.htm">
            Image by dit26978 on Freepik
        </a>
    </p>,
    <p key={9}>
        Photo by{" "}
        <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Nathan Dumlao
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/shallow-focus-photography-of-coffee-late-in-mug-on-table-zUNs99PGDg0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={10}>
        Photo by{" "}
        <a href="https://unsplash.com/@bhuwan_bansal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Bhuwan Bansal
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/man-in-black-and-white-polo-shirt-playing-guitar-Imq-jC1zPMM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={11}>
        Photo by{" "}
        <a href="https://unsplash.com/@abiwin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Abiwin Krisna
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/a-group-of-people-standing-next-to-each-other-qYrOqGunsQA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={12}>
        Photo by{" "}
        <a href="https://unsplash.com/@sidsaxena?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Sid Saxena
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/a-group-of-people-sitting-at-tables-in-a-restaurant-EKO67rTDwQ8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={13}>
        Photo by{" "}
        <a href="https://unsplash.com/@marcus_ganahl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Marcus Ganahl
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/brown-wooden-table-and-chairs-ZqlQ4HovZ8U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={14}>
        Photo by{" "}
        <a href="https://unsplash.com/@pafuxu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Kouji Tsuru
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/a-restaurant-with-wooden-tables-and-wooden-chairs-85P3k4340U8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
        </a>
    </p>,
    <p key={15}>
        - Photo by Chevanon Photography:{" "}
        <a href="https://www.pexels.com/photo/close-up-of-coffee-cup-on-table-312418/">
            https://www.pexels.com/photo/close-up-of-coffee-cup-on-table-312418/
        </a>
    </p>,
    <p key={16}>
        Photo by Fallon Michael:{" "}
        <a href="https://www.pexels.com/photo/cup-of-brown-coffee-3551717/">
            https://www.pexels.com/photo/cup-of-brown-coffee-3551717/
        </a>
    </p>,
];

export default function CreditsSection() {
    return (
        <section className="section grid xl:grid-cols-2 gap-4">
            {credits.map((credit, index) => (
                <Card
                    key={index}
                    className={`transition-transform duration-300 hover:scale-[1.03] w-full`}
                >
                    <CardHeader className={`flex w-full justify-between gap-4`}>
                        {credit}
                    </CardHeader>
                </Card>
            ))}
        </section>
    );
}
