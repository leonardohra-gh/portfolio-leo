// Interesting components: https://flowbite.com/docs/components/tabs/
// https://flowbite.com/docs/components/card/

import InteractiveTabs from "@/app/_components/tabs"
import { useTranslation } from "@/app/i18n";
import { ApiDataTabs } from "@/app/types";
import dataTabs from "@/public/data_json/data_tabs.json"

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
  const data: ApiDataTabs = dataTabs;

  return (
    <main>
      <InteractiveTabs tabs={data.tabs[Props.params.lng]} lng={Props.params.lng}/>
    </main>
  )
}
