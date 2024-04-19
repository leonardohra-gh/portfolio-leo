// Interesting component: https://flowbite.com/docs/components/avatar/
// https://flowbite.com/docs/components/card/ User profile card
import ProfileCard from "@/app/_components/profile-card"

export default function AboutMe
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
    return (
      <main>
        <div className="flex justify-center w-full flex-col md:flex-row md:w-full dark:border-gray-700 gap-2">
          <div className="flex content-stretch">
            <ProfileCard/>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Sobre mim</h1>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices metus ac augue rhoncus condimentum. Morbi vulputate arcu ac bibendum dignissim. Quisque eget nibh convallis, luctus ex ac, vestibulum dui. Donec eget elementum nisi. Cras nec semper augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sagittis at risus vel ultrices. Aenean volutpat urna magna, in fringilla purus condimentum non.</p>
            <p className="text-gray-500 dark:text-gray-400">Morbi quis neque aliquet, fringilla massa pellentesque, cursus neque. Donec gravida magna quis quam posuere, a viverra tellus volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel tincidunt ex. Maecenas eget egestas lorem. Ut ac purus venenatis, condimentum libero sit amet, tristique leo. Quisque scelerisque mi a augue dignissim, vel fermentum purus efficitur. Integer aliquam metus eget dolor placerat vehicula. Maecenas finibus aliquam lectus, vel gravida dolor aliquet id. Vestibulum quis convallis neque. Nullam in vestibulum odio, non tincidunt dui. Ut mollis egestas sapien vulputate semper. Ut ac risus non augue vestibulum feugiat id vitae nunc. Sed dolor dui, pulvinar sed nisl non, dictum efficitur sapien.</p>

          </div>
        </div>
        
      </main>
    )
}
  