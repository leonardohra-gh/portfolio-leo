// Interesting component: https://flowbite.com/docs/components/avatar/
// https://flowbite.com/docs/components/card/ User profile card
// https://flowbite.com/docs/components/timeline/
import ProfileCard from "@/app/_components/About-Me/profile-card"
import { TLItem, TimelineElement } from "@/app/_components/About-Me/timeline";
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
  const t_page = await useTranslation(Props.params.lng, 'about-me/page')
  const t_card = await useTranslation(Props.params.lng, 'about-me/card')
  const timelineItems: TLItem[] = t_page.t("timeline", { returnObjects: true })
  const paragraphs: string[] = t_page.t("paragraphs", { returnObjects: true })
    return (
      <main>
        <div className="flex justify-center w-full flex-col md:flex-row md:w-full dark:border-gray-700 gap-2">
          <div className="w-11/12 mx-auto md:w-1/3 flex content-stretch">
            <ProfileCard subtitle={t_card.t("subtitle")}/>
          </div>
          <div className="w-11/12 mx-auto md:w-2/3 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">{t_page.t("title")}</h1>
            <p className="mb-3 text-gray-500 dark:text-gray-400">{paragraphs[0]}</p>
            <p className="text-gray-500 dark:text-gray-400">{paragraphs[1]}</p>
            <p className="text-gray-500 dark:text-gray-400 text-center">{t_page.t("text-pre-tl")}</p>
            <TimelineElement items={timelineItems} />
          </div>
        </div>
        
      </main>
    )
}
  