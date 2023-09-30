import { PrismicPreview } from '@prismicio/next'
import './globals.css'

import { repositoryName } from '../../prismicio'

import Header from './components/Header/Header'

import { Montserrat, Lato } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--headline-font',
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700'],
  variable: '--body-font',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${montserrat.variable}`}>
        <Header />
        <main className="flex flex-col min-h-screen bg-backgroundGrey w-full max-w-screen-xxl mx-auto">
          {children}
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
