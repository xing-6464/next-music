import type { Metadata } from 'next'
import './globals.scss'
import Header from '../components/Header/Header'
import Tab from '@/components/tab/Tab'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Tab />
        {children}
      </body>
    </html>
  )
}
