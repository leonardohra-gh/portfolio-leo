import Carousel from "@/app/_components/gallery-carousel";

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
  let transl = "Traducao"
  let title = "Titulo"
  let paragraphs = ["paragrafo 1", "paragrafo 2"]
  let images = ["", ""]

  return (
    <main className="w-full lg:w-1/2 lg:mx-auto">
        <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">{title}</p>
        <Carousel elements={images}/>
        
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