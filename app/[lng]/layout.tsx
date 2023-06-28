import './globals.css'
import { Inter } from 'next/font/google'
import NavigationBar from '../components/navbar'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leonardo\'s portfolio',
  description: 'The website I have developed to show my skills and projects that I have worked on.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavigationBar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
