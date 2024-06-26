import './globals.css'
// import { PrismicPreview } from '@prismicio/next'
// import { repositoryName } from '../../prismicio'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/contact'

// import Form from './components/Form/form'

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
          </SliceContainer>
        </div>
        <Footer />
      </body>
    </html>
  )
}
