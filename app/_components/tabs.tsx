//https://www.flowbite-react.com/docs/components/tabs
'use client'

import { Tabs } from 'flowbite-react';
import Image from "next/image";
import { CategoryProject, SummarizedProject } from "@/app/types"
import Link from 'next/link';
import { getLocalizedText } from "@/app/_components/cmsService";
import { RegularParagraph } from "@/app/_components/typography";

const InteractiveTabs =
    (
        {
            tabs,
            lng,
        }
            :
            {
                tabs: CategoryProject[]
                lng: string
            }
    ) => {
        return (
            <div className='mx-auto md:w-1/2'>
                <Tabs
                    aria-label="Projects tab"
                    style="underline"
                    className='mx-2'>
                    {tabs.map
                        (
                            (
                                tab: CategoryProject
                            ) => {
                                return (
                                    <Tabs.Item
                                        key={getLocalizedText(tab._allCategoryNameLocales, lng)}
                                        active
                                        title={getLocalizedText(tab._allCategoryNameLocales, lng)}>
                                        <RegularParagraph paragraphs={[getLocalizedText(tab._allCategoryDescriptionLocales, lng)]} classNamePlus='my-1' />
                                        {tab.projectContent.map
                                            (
                                                (
                                                    project: SummarizedProject
                                                ) => {
                                                    return (
                                                        <TabCard key={project.projectId} project={project} lng={lng} />
                                                    )
                                                }
                                            )}
                                    </Tabs.Item>
                                )
                            }
                        )}
                </Tabs>
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
                project: SummarizedProject,
                lng: string
            }
    ) => {
        const id = project.projectId
        const imgUrl = project.projectThumbnail.url
        const title = getLocalizedText(project._allProjectTitleLocales, lng)
        const summary = getLocalizedText(project._allProjectDescriptionLocales, lng)

        return (
            <Link
                href={`/${lng}/projects/${id}`}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={`${imgUrl}`}
                    width={200}
                    height={200}
                    alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{summary}</p>
                </div>
            </Link>
        )
    }

export default InteractiveTabs;