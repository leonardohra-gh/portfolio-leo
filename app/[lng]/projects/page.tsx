// Interesting components: https://flowbite.com/docs/components/tabs/
// https://flowbite.com/docs/components/card/

import InteractiveTabs from "@/app/_components/Projects/tabs"
import { CMSResultCategory } from "@/app/types";
import { cmsQueryProjectSummaries } from "@/app/_components/General/cmsService";


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
  const data: CMSResultCategory = await cmsQueryProjectSummaries()

  return (
    <main>
      <InteractiveTabs tabs={data.allCategoryProjects} lng={Props.params.lng}/>
    </main>
  )
}
