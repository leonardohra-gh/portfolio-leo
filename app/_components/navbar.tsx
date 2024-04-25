'use client'

import Link from "next/link";
import Image from "next/image";
import { Disclosure } from '@headlessui/react'
import { useTranslation } from "@/app/i18n/client";
import {Trans} from 'react-i18next/TransWithoutContext'
import {languages, langFlags} from "@/app/i18n/settings"
import logo from "/public/logo.png"
import { DarkThemeToggle } from "flowbite-react";

const MenuSVG = (params: {"open": boolean}) =>
{
    // Draw a sandwich menu if the menu isn't open, otherwise draw an X
    return(
        <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            {
                params.open && 
                (
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                )
            }
            {
                !params.open && 
                (
                    <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                )
            }
        </svg>
    )
}

const NavigationBar = 
(
    {
        lng
    }
    :
    {
        lng: string
    }
) =>
{
    const {t} = useTranslation(lng, 'navbar', {})
    const navigation = 
    [
        [t("nav-item-1"), `/${lng}`],
        [t("nav-item-2"), `/${lng}/projects`],
        [t("nav-item-3"), `/${lng}/about-me`],
        // TODO Blog?
    ]

    return(
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}
                <Disclosure>
                    {
                        ({open}) =>
                        (
                            <>
                                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                                    <Link href="/">
                                        <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                                            <span>
                                                <Image 
                                                    src={logo}
                                                    alt="Neural network resembling a brain"
                                                    width="32"
                                                    height="32"
                                                    className="w-8 dark:invert"
                                                />
                                            </span>
                                            <span>{t("site-title")}</span>
                                        </span>
                                    </Link>

                                    <Disclosure.Button
                                        aria-label="Toggle Menu"
                                        className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                                        <MenuSVG open={open} />
                                    </Disclosure.Button>

                                    <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                        <>
                                            {
                                                navigation.map
                                                (
                                                    (item, index) =>
                                                    (
                                                        <Link key={index} href={item[1]} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                                            {item[0]}
                                                        </Link>
                                                    ) 
                                                )
                                            }
                                        </>
                                    </Disclosure.Panel>
                                </div>
                            </>
                        )
                    }
                </Disclosure>
                <div className="flex w-full lg:w-fit justify-center">
                    <Trans i18nKey="languageSwitcher" t={t}>
                        {languages.map((l, index) => 
                        {
                            return(
                                <span key={l} className="py-2 px-2">
                                    <Link href={`/${l}`}>
                                        <Image 
                                            src={langFlags[index]}
                                            alt={`flag representing language ${l}`}
                                            width="32"
                                            height="32"/>
                                    </Link>
                                </span>
                            )
                        })}
                    </Trans>
                </div>
                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        { 
                            navigation.map
                            (
                                (menu, index) =>
                                (
                                    <li className="mr-3 nav__item" key={index}>
                                        <Link href={menu[1]} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                                            {menu[0]}
                                        </Link>
                                    </li>
                                )
                            ) 
                        }
                    </ul>
                </div>
                
                <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                    <DarkThemeToggle />
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar