"use client";
import { List } from "flowbite-react";

export const Heading =
    (
        {
            title,
            subtitle,
            classNamePlus
        }:
            {
                title: string,
                subtitle?: string
                classNamePlus?: string
            }
    ) =>
    {
        return (
            <div>
                <h1 className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ${classNamePlus ? classNamePlus : ""}`}>{title}</h1>
                <p className={`mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ${classNamePlus ? classNamePlus : ""}`}>{subtitle}</p>
            </div>
        )
    }

export const SecondLevelHeading =
    (
        {
            title,
            subtitles,
            classNamePlus
        }:
            {
                title: string,
                subtitles?: string[],
                classNamePlus?: string
            }
    ) =>
    {
        return (
            <div>
                <h1 className={`text-4xl font-extrabold dark:text-white ${classNamePlus ? classNamePlus : ""}`}>{title}</h1>
                {subtitles?.map(
                    (text: string, index: number) =>
                    {
                        return (
                            <p key={`par-${index}`} className={`mb-1 text-lg font-normal text-gray-500 dark:text-gray-400 ${classNamePlus ? classNamePlus : ""}`} >{text}</p>
                        )
                    }
                )}
            </div >
        )
    }

export const RegularParagraph =
    (
        {
            paragraphs,
            classNamePlus
        }:
            {
                paragraphs: string[],
                classNamePlus?: string
            }
    ) =>
    {
        return (
            <div>
                {paragraphs.map(
                    (text: string, index: number) =>
                    {
                        return (
                            <p key={`reg_par-${index}`} className={`text-gray-500 dark:text-gray-400 ${classNamePlus ? classNamePlus : ""}`} > {text}</p>
                        )
                    }
                )}
            </div>
        )
    }

export const ListWithTitle =
    (
        {
            title,
            items,
            classNamePlus
        }:
            {
                title: string,
                items: string[]
                classNamePlus?: string
            }
    ) =>
    {
        return (
            <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <List>
                    {items.map(
                        (item) =>
                        {
                            return (
                                <List.Item className={`${classNamePlus ? classNamePlus : ""}`}>{item}</List.Item>
                            )
                        }
                    )}
                </List>
            </div>
        )

    }
