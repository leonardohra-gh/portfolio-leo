"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { ImageFile } from "@/app/types";
import { customTheme } from "@/app/_components/Projects/Project/gallery-carousel";
import { Flowbite } from "flowbite-react";
import { SecondLevelHeading, RegularParagraph, ListWithTitle } from "@/app/_components/General/typography";

const SkillCarousel = () =>
{
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <SecondLevelHeading title="My skills" classNamePlus="text-center" />
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slide={false}>
                    <SkillItem />
                </Carousel>
            </div>
        </Flowbite>
    )
}

const SkillItem = () =>
{
    return (
        <div className="flex flex-row w-full h-full place-content-evenly">
            <Image className="rounded-md object-contain" key={"Test"} src={"https://www.datocms-assets.com/129761/1714055265-kf-system-thumbnail.png"} alt="..." width={200} height={200} />
            <ListWithTitle title="My skill" items={["Test", "Test 2", "Test 3"]} />
        </div>
    )
}

export default SkillCarousel;