import ImgCarousel from "@/app/_components/gallery-carousel";
import { CMSResultProject } from "@/app/types";
import { cmsQueryProjectById, getLocalizedText } from "@/app/_components/cmsService";

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
  
  const data: CMSResultProject = await cmsQueryProjectById(Props.params.id)
  //console.log(data.contentProject.projectAlbum)
  let title = getLocalizedText(data.contentProject._allProjectTitleLocales, Props.params.lng)
  let body = getLocalizedText(data.contentProject._allProjectBodyLocales, Props.params.lng)
  let images = data.contentProject.projectAlbum
  let imageUrls: string[] = []
  
  for(let item of images)
    imageUrls.push(item.url)

  return (
    <main className="w-full lg:w-1/2 lg:mx-auto">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
        <ImgCarousel elements={imageUrls}/>
        <div>
          <p className="text-gray-500 dark:text-gray-400">{body}</p>
        </div>
        
    </main>
  )
}