import { PrismicPreview } from '@prismicio/next'
import './globals.css'

import { repositoryName } from '../../prismicio'

import Script from 'next/script'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/contact'

import { Montserrat, Lato } from '@next/font/google'
import SliceContainer from './components/SliceContainer/sliceContainer'

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
        <div id="contact">
          <SliceContainer className="flex flex-col gap-fluid-48 lg:flex-row">
            <Contact />
            <div className="lg:w-[65%] self-start">
              <div id="ff-compose"></div>
              <Script
                id="form"
                src="https://formfacade.com/include/110808910195665411918/form/1FAIpQLSfRKdf-wyQIzzq362Wo6ZpOmujIDSCBhcc0Gd1fY2UOli8k1w/classic.js?div=ff-compose"
              ></Script>
            </div>
          </SliceContainer>
        </div>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
