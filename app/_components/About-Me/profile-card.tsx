import { Card, Dropdown, DropdownItem } from "flowbite-react";
import Image from "next/image";
import profilePic from "@/public/my_photos/Leo tepsi.jpg"
import { Button } from "flowbite-react";
import twitterIcon from "@/public/about-me/twitter.png"
import linkedinIcon from "@/public/about-me/linkedin.png"
import emailIcon from "@/public/about-me/email.png"


export default function ProfileCard()
{
  return (
    <Card className="max-w-sm">
      <div className="flex flex-col items-center p-5 ">
        <Image
          alt="Leo's photo"
          height="96"
          src={profilePic}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Leonardo Henrique da Rocha Araujo</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Desenvolvedor Full Stack</span>
        <div className="flex flex-wrap gap-2 pt-2">
          <a href="https://www.linkedin.com/in/leonardohra/" target="_blank" rel="noopener">
            <Button size="xs" outline pill>
              <Image src={linkedinIcon} width={32} height={32} alt="" className="h-6 w-6" />
            </Button>
          </a>
          <Button size="xs" outline pill>
            <Image src={emailIcon} width={32} height={32} alt="" className="h-6 w-6" />
          </Button>
          <Button size="xs" outline pill>
            <Image src={twitterIcon} width={32} height={32} alt="" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
}