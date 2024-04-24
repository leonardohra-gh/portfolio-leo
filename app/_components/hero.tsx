import profilePic from "@/public/my_photos/leo no BG.png"
import Image from "next/image";
import { Button } from "flowbite-react";
import ViewOnGithub from "@/app/_components/viewOnGithub";
import Link from "next/link";

export default function ProfileCard() {
    return (
        <div className="mx-auto flex flex-col items-center p-5">
          <Image
            alt="Leo's photo"
            height="400"
            src={profilePic}
            width="400"
            className="mb-3 rounded-full shadow-lg w-60 h-60"
          />
          <h5 className="mb-1 text-5xl font-medium text-gray-900 dark:text-white">Meu Portfólio</h5>
          <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Sou um desenvolvedor Full Stack, que gosta de aprender novas tecnologias e ferramentas, sempre se desafiando.</p>
          <span className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Acredito que mais importante do que saber tudo, é ser capaz de aprender o que não sei de forma eficiente.</span>
          <div className="mx-auto flex flex-row items-center p-5 gap-5">
            <Button color="purple"><Link href={""}>Conheça meus projetos</Link></Button>
            <Button color="purple">Entre em contato</Button>
            <ViewOnGithub text="Veja meu repositório no Github" url="https://github.com/leonardohra-gh?tab=repositories"/>
          </div>
        </div>
    );
  }