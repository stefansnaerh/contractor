import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { BookAppointmentDocument } from '../../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../../slices'

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
        </div>
      </SliceContainer>

      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
