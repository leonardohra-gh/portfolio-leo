// https://flowbite.com/docs/components/carousel/
"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { ImageFile } from "@/app/types";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = 
{
    carousel: 
    {
        indicators: 
        {
            active: 
            {
              off: "bg-purple-300 hover:bg-purple-950",
              on: "bg-purple-700"
            }
        },
        control: 
        {
            base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 group-hover:bg-purple-800 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
            icon: "h-5 w-5 text-white sm:h-6 sm:w-6"
        },
    }
  };
  


const ImgCarousel = 
(
    {
        elements
    }
    :
    {
        elements: ImageFile[]
    }
) =>
{
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slide={false}>
                    {elements.map
                    (
                        (image: ImageFile) =>
                        {
                            return(
                                <a className="w-full h-full" target="_blank" href={image.url} rel="noopener noreferrer">
                                    <Image className="object-contain h-full w-full rounded-md" key={image.url} src={image.url} alt="..." width={image.width} height={image.height} />
                                </a>
                                
                            )
                        }
                    )}
                </Carousel>
            </div>
        </Flowbite>
    )
}

export default ImgCarousel;