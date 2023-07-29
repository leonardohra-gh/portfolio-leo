// Interesting components: https://flowbite.com/docs/components/tabs/
// https://flowbite.com/docs/components/card/

import InteractiveTabs from "@/app/components/tabs"
import { useTranslation } from "@/app/i18n";

export default async function Home
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
  let {t} = await useTranslation(Props.params.lng, 'projects/tabs')
  const titles = [t("title-section-1"), t("title-section-2"), t("title-section-3")]
  const desc = [t("description-section-1"), t("description-section-2"), t("description-section-3")]
  return (
    <main>
      <InteractiveTabs tabTitles={titles} tabDescription={desc} />
    </main>
  )
}
  