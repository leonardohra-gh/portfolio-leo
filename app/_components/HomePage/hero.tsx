'use client'
import profilePic from "@/public/my_photos/leo no BG.png"
import Image from "next/image";
import { Button } from "flowbite-react";
import ViewOnGithub from "@/app/_components/General/viewOnGithub";
import Link from "next/link";
import { SecondLevelHeading } from "@/app/_components/General/typography";
import { useTranslation } from "@/app/i18n/client";

export default function ProfileCard({lng}: {lng:string}) 
{
  const {t} = useTranslation(lng, 'hero')
  const buttonsStr: string[] = t("buttons" , { returnObjects: true })
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
        title={t("title")}
        subtitles= {[t("sub-title-1"), t("sub-title-2")]}
        classNamePlus="text-center"
      />
      <div className="mx-auto flex flex-col md:flex-row items-center gap-1 md:p-5 md:gap-5">
        <Button color="purple"><Link href={`/${lng}/projects`}>{buttonsStr[0]}</Link></Button>
        <Button color="purple" href="#contactForm">{buttonsStr[1]}</Button>
        <ViewOnGithub text={buttonsStr[2]} url="https://github.com/leonardohra-gh?tab=repositories" />
      </div>
    </div>
  );
}