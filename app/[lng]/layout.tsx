import './globals.css'
import { languages } from '@/app/i18n/settings'
import { Inter } from 'next/font/google'
import NavigationBar from '@/app/_components/AllPages/navbar'
import { dir } from 'i18next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Flowbite } from 'flowbite-react'
import Footer from "@/app/_components/AllPages/footer"
import Container from "@/app/_components/General/container";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leonardo\'s portfolio',
  description: 'The website I have developed to show my skills and projects that I have worked on.',
  favicon: "/favicon.ico"
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout
  (
    {
      children,
      params,
    }
      :
      {
        children: React.ReactNode
        params:
        {
          lng: string
        }
      }
  ) {
  //console.log("Layout lang: " + params.lng)
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <body className={inter.className}>
        <Container>
          <Flowbite>
            <NavigationBar lng={params.lng} />
            {children}
            <SpeedInsights />
          </Flowbite>
          <Footer lng={params.lng} />
        </Container>
      </body>
    </html>
  )
}
