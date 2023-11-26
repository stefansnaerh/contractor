import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { BookAppointmentDocument } from '../../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../../slices'
import Form from '../../components/Form/form'
import { FadeIn } from '../../components/Fade/fade'
import SliceContainer from '../../components/SliceContainer/sliceContainer'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('book_appointment')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Apiko() {
  const client = createClient()

  const page = await client.getSingle<BookAppointmentDocument>(
    'book_appointment'
  )
  const section = page.data

  return (
    <section className=" mt-[90px] xs:mt-[100px] md:mt-[120px] text-black">
      <SliceContainer className="relative flex flex-col smmd:flex-row  gap-fluid-40 lg:gap-fluid-122 xl:gap-fluid-144 ">
        <div className="  relative flex flex-col gap-fluid-40 lg:gap-fluid-48 smmd:w-[70%] md:w-[75%] self-start">
          {section.title && (
            <FadeIn className="border-b-[3px] pb-4 border-y-orange w-fit self-start">
              <h1 className="text-h2 font-headline font-semiBold">
                {section.title}
              </h1>
            </FadeIn>
          )}
          <FadeIn>
            <ul className="font-regular text-paragraph font-body [&_li]:list-disc [&_li]:marker:text-orange flex flex-col gap-fluid-16">
              <span className="">
                Hægt er að hafa samband við okkur með að :
              </span>
              <li>
                Hringja í okkur í síma{' '}
                <a
                  className="border-b-2 border-b-footerBlue"
                  aria-label="Hlekkur til að hringja í okkur"
                  href="tel:5540822"
                >
                  5540822
                </a>
              </li>
              <li>
                Senda okkur tölvupóst á{' '}
                <a
                  className="border-b-2 border-b-footerBlue"
                  aria-label="Hlekkur til að hringja í okkur"
                  href="mailto:shverk@shverk.is"
                >
                  shverk@shverk.is
                </a>
              </li>
              <li>
                Fylla út formið hér á síðunni og við höfum samband við fyrsta
                tækifæri
              </li>
            </ul>
          </FadeIn>
        </div>

        <Form />
      </SliceContainer>

      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
