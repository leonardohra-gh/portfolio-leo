import ImgCarousel from "@/app/_components/gallery-carousel";
import { CMSResultProject } from "@/app/types";
import { cmsQueryProjectById, getLocalizedText } from "@/app/_components/cmsService";
import { MDXRemote } from 'next-mdx-remote/rsc'

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
  
  const components = 
  { 
    h2: (props: any) => <h2 className="my-4 text-4xl font-extrabold dark:text-white" {...props} /> ,
    ul: (props: any) => <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" {...props} /> ,
    hr: (props: any) => <hr className="mt-4" {...props} /> ,
    p: (props: any) => <p className="text-gray-500 dark:text-gray-400" {...props} />
  }

  return (
    <main className="w-11/12 lg:w-1/2 mx-auto">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">{title}</h1>
        <ImgCarousel elements={images}/>
        <MDXRemote source={body} components={components} />
    </main>
  )
}