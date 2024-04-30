// Interesting component: https://flowbite.com/docs/components/avatar/
// https://flowbite.com/docs/components/card/ User profile card
// https://flowbite.com/docs/components/timeline/
import ProfileCard from "@/app/_components/About-Me/profile-card"
import { useTranslation } from "@/app/i18n";

export default async function AboutMe
(
  Props:
  {
    params: 
    {
        lng: string
    }
  }
) 
{
  const {t} = await useTranslation(Props.params.lng, 'about-me/page')
  const paragraphs: string[] = t("paragraphs", { returnObjects: true })
    return (
      <main>
        <div className="flex justify-center w-full flex-col md:flex-row md:w-full dark:border-gray-700 gap-2">
          <div className="w-1/3 flex content-stretch">
            <ProfileCard/>
          </div>
          <div className="w-2/3 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">{t("title")}</h1>
            <p className="mb-3 text-gray-500 dark:text-gray-400">{paragraphs[0]}</p>
            <p className="text-gray-500 dark:text-gray-400">{paragraphs[1]}</p>

          </div>
        </div>
        
      </main>
    )
}
  