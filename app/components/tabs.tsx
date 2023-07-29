//https://www.flowbite-react.com/docs/components/tabs
'use client'

import { Tabs } from 'flowbite-react';
import Image from "next/image";
import office from "public/projects/office.jpg";

type StaticImageData = 
{ 
    src: string; 
    height: number; 
    width: number; 
    blurDataURL?: string; 
}

const InteractiveTabs = 
(
    {
        tabTitles,
        tabDescription,
    }
    :
    {
        tabTitles: string[],
        tabDescription: string[]
    }
) =>
{

    const cardTempImg = office
    const cardTempTitle = "Noteworthy technology acquisitions 2021"
    const cardTempDesc = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    const cardTempLink = "#"
    return (
        <div className='mx-auto md:w-1/2'>
            <Tabs.Group
                aria-label='Projects tab'
                style='underline'
                className='mx-2'>
                    {tabTitles.map
                    ( 
                        (
                            value, index 
                        ) => 
                        {
                            return(
                                <Tabs.Item
                                    active
                                    title={value}>
                                        <h2 className='my-2'>{tabDescription[index]}</h2>
                                        <TabCard cardImage={cardTempImg} cardTitle={cardTempTitle} cardDescription={cardTempDesc} link={cardTempLink} />
                                </Tabs.Item>
                            )
                        }
                    )}
                
            </Tabs.Group>
        </div>
    )
}

const TabCard = 
(
    {
        cardImage,
        cardTitle,
        cardDescription,
        link,
    }
    :
    {
        cardImage: StaticImageData,
        cardTitle: string,
        cardDescription: string,
        link: string
    }
) => 
{
    return (
        <a 
            href={link} 
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image 
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
                src={cardImage} 
                alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardTitle}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cardDescription}</p>
            </div>
        </a>
    )
}

export default InteractiveTabs;