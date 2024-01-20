// Interesting components: https://flowbite.com/docs/components/tabs/
// https://flowbite.com/docs/components/card/

import InteractiveTabs from "@/app/_components/tabs"
import { useTranslation } from "@/app/i18n";
import { ApiDataTabs } from "@/app/types";

export default async function Projects
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
  //let {t} = await useTranslation(Props.params.lng, 'projects/tabs')
  const data: ApiDataTabs = await fetch("http://127.0.0.1:4000", { 
    method: "GET", 
    mode: 'cors', 
    headers: { 'Content-Type': 'application/json',}
  }).then((res) => res.json());


  return (
    <main>
      <InteractiveTabs tabs={data.tabs[Props.params.lng]}/>
    </main>
  )
}
