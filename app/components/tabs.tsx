//https://www.flowbite-react.com/docs/components/tabs
'use client'

import { Tabs } from 'flowbite-react';
import Image from "next/image";
import office from "public/projects/office.jpg";

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
    return (
        <div id='tabs' className='mx-auto md:w-1/2'>
            <Tabs.Group
                aria-label='Projects tab'
                style='underline'>
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
                                        <p>{tabDescription[index]}</p>
                                </Tabs.Item>
                            )
                        }
                    )}
                
            </Tabs.Group>
        </div>
    )
}

export default InteractiveTabs;