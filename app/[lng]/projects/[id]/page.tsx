import { ProjectPage } from "@/app/types";
import Carousel from "@/app/_components/gallery-carousel";
import dataProjects from "@/public/data_json/data_projects.json"

export default async function Project
(
  Props:
  {
    params: 
    {
        lng: string,
        id: string
    }
  }
) 
{
  //console.log("http://127.0.0.1:4000/projects/" + Props.params.pageId)
  //let props = getStaticProps()
  //console.log(Props.params.id)
  
  const data: ProjectPage[] = dataProjects;
  const filteredData: ProjectPage = data.filter((item) => item.id === Props.params.id)[0];

  //console.log(filteredData)

  let transl = filteredData.translations[Props.params.lng]
  let title = transl.title
  let paragraphs = transl.paragraphs

  return (
    <main className="w-full lg:w-1/2 lg:mx-auto">
        <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">{title}</p>
        <Carousel elements={filteredData.images}/>
        
        {paragraphs.map
        (
            (
              paragraph
            ) =>
            {
              return(
                <div key={paragraph}>
                  <p className="text-gray-500 dark:text-gray-400">{paragraph}</p>
                </div>
              )
            }
        )}
        
    </main>
  )
}