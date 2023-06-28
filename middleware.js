import { NextResponse } from "next/server";
import acceptLanguage from 'accept-language';
import { fallbackLng, languages } from "./app/i18n/settings";

acceptLanguage.languages(languages)

export const config =
{
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

const cookieName = 'i18next'

export function middleware(req)
{
    let lng
    let cookies = req.cookies
    if(cookies.has(cookieName)) lng = acceptLanguage.get(cookies.get(cookieName).value)
    if(!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if(!lng) lng = fallbackLng

    if(
        !languages.some( loc => req.nextUrl.pathname.startsWith(`/${loc}`) &&
        !req.nextUrl.pathname.startsWith('/_next'))
    )
        return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))

    if(req.headers.has('referer'))
    {
        const refererUrl = new URL(req.headers.get('referer'))
        const lngInReferer = languages.find( (l) => refererUrl.pathname.startsWith(`/${l}`))
        const response = NextResponse.next()

        if(lngInReferer) response.cookies.set(cookieName, lngInReferer)
        return response
    }

    return NextResponse.next()

}