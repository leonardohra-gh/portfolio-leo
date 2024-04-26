'use client'
import profilePic from "@/public/my_photos/leo no BG.png"
import Image from "next/image";
import { Button } from "flowbite-react";
import ViewOnGithub from "@/app/_components/General/viewOnGithub";
import Link from "next/link";
import Container from "@/app/_components/General/container";
import { SecondLevelHeading } from "@/app/_components/General/typography";
import { useTranslation } from "@/app/i18n/client";

export default function ProfileCard({lng}: {lng:string}) {

  return (
    <Container className="flex flex-col items-center">
      <Image
        alt="Leo's photo"
        height="400"
        src={profilePic}
        width="400"
        className="mb-3 rounded-full shadow-lg w-60 h-60"
      />
      <SecondLevelHeading
        title="Meu Portfólio"
        subtitles= {[ "Sou um desenvolvedor Full Stack, que gosta de aprender novas tecnologias e ferramentas, sempre se desafiando.", 
        "Acredito que mais importante do que saber tudo, é ser capaz de aprender o que não sei de forma eficiente."]}
        classNamePlus="text-center"
      />
      <div className="mx-auto flex flex-row items-center gap-1 md:p-5 md:gap-5">
        <Button color="purple"><Link href={`/${lng}/projects`}>Conheça meus projetos</Link></Button>
        <Button color="purple">Entre em contato</Button>
        <ViewOnGithub text="Veja meu repositório no Github" url="https://github.com/leonardohra-gh?tab=repositories" />
      </div>
    </Container>
  );
}