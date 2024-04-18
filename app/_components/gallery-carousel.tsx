// https://flowbite.com/docs/components/carousel/
"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";

const ImgCarousel = 
(
    {
        elements
    }
    :
    {
        elements: string[]
    }
) =>
{
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
            {elements.map
            (
                (imgUrl: string) =>
                {
                    return(
                        <Image src={imgUrl} alt="..." width={400} height={400} />
                    )
                }
            )}
          </Carousel>
      </div>

    )
}

export default ImgCarousel;