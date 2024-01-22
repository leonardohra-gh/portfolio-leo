//https://www.flowbite-react.com/docs/components/tabs
'use client'

import { Tabs } from 'flowbite-react';
import Image from "next/image";
import { Tab, TabProject } from "@/app/types"
import Link from 'next/link';

const InteractiveTabs = 
(
    {
        tabs,
        lng,
    }
    :
    {
        tabs: Tab[]
        lng: string
    }
) =>
{
    return (
        <div className='mx-auto md:w-1/2'>
            <Tabs.Group
                aria-label='Projects tab'
                style='underline'
                className='mx-2'>
                    {tabs.map
                    ( 
                        (
                            tab
                        ) => 
                        {
                            return(
                                <Tabs.Item
                                    key={tab.title}
                                    active
                                    title={tab.title}>
                                        <h2 className='my-2'>{tab.description}</h2>
                                        {tab.projects.map
                                        ( 
                                            (
                                                project
                                            ) => 
                                            {
                                                return(
                                                    <TabCard key={project.title} project={project} lng={lng}/>
                                                )
                                            } 
                                        )}
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
        project,
        lng
    }
    :
    {
        project: TabProject,
        lng: string
    }
) => 
{
    const {id, imgUrl, title, summary} = project
    return (
        <Link 
            href={`/${lng}/projects/${id}`} 
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image 
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
                src={imgUrl!} 
                width={200}
                height={200}
                alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{summary}</p>
            </div>
        </Link>
    )
}

export default InteractiveTabs;