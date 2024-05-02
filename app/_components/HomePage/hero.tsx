import profilePic from "@/public/my_photos/leo no BG.png"
import Image from "next/image";
import { Button } from "flowbite-react";
import ViewOnGithub from "@/app/_components/General/viewOnGithub";
import Link from "next/link";
import { SecondLevelHeading } from "@/app/_components/General/typography";

export default function ProfileCard(
  {
    title,
    paragraphs,
    buttonsText,
    currentLng
  }:
    {
      title: string,
      paragraphs: string[],
      buttonsText: string[],
      currentLng: string
    }) 
{
  return (
    <div className="flex flex-col items-center my-4">
      <Image
        alt="Leo's photo"
        height="400"
        src={profilePic}
        width="400"
        className="mb-3 rounded-full shadow-lg w-60 h-60"
      />
      <SecondLevelHeading
        title={title}
        subtitles={paragraphs}
        classNamePlus="text-center"
      />
      <div className="mx-auto flex flex-col md:flex-row items-center gap-1 md:p-5 md:gap-5">
        <Button color="purple"><Link href={`/${currentLng}/projects`}>{buttonsText[0]}</Link></Button>
        <Button color="purple" href="#contactForm">{buttonsText[1]}</Button>
        <ViewOnGithub text={buttonsText[2]} url="https://github.com/leonardohra-gh?tab=repositories" />
      </div>
    </div>
  );
}