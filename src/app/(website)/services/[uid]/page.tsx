import { Metadata } from 'next'
import { createClient } from '../../../../../prismicio'
import { ServiceDocument } from '../../../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../../../slices'

import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import { FadeIn } from '@/src/app/components/Fade/fade'
import Form from '@/src/app/components/Form/form'
import RichText from '@/src/app/components/RichText/RichText'

type Params = { uid: string }

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client.getByUID('service', params.uid)

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function ServicePage({ params }: { params: Params }) {
  const client = createClient()

  const page = await client.getByUID<ServiceDocument>('service', params.uid)

  // const allServices = await client.getAllByType<ServiceDocument>('service')

  // const servicesArray = allServices.map((service) => service.data.title)

  const section = page.data

  return (
    <section className=" mt-[90px] xs:mt-[100px] md:mt-[120px] text-black bg-[#FFFF]">
      <SliceContainer className="relative flex flex-col smmd:flex-row  gap-fluid-40 lg:gap-fluid-122 xl:gap-fluid-144 ">
        <div className="  relative flex flex-col gap-fluid-40 lg:gap-fluid-48 smmd:w-[70%] md:w-[75%] self-start">
          {section.title && (
            <FadeIn className="border-b-[3px] pb-4 border-y-orange w-fit self-start">
              <h1 className="text-h2 font-headline font-semiBold">
                {section.title}
              </h1>
            </FadeIn>
          )}
          {section.paragraph && (
            <FadeIn className=" lg:w-[90%] ">
              <RichText text={section.paragraph} />
            </FadeIn>
          )}
        </div>
      </SliceContainer>
      <SliceZone slices={page.data.slices} components={components} />
      <SliceContainer className="flex flex-col gap-fluid-56 lg:flex-row  ">
        <div className="flex flex-col  gap-fluid-40  lg:w-[35%] lg:self-start">
          <FadeIn className="border-b-[3px] pb-4 border-y-orange w-fit self-start">
            <h2 className="text-h1 font-headline font-semiBold">
              Heyrðu í okkur!
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="text-paragraph font-body">
              Vinsamlegast fyllið út formið og við munum hafa samband við fyrsta
              tækifæri. Okkur er annt um að svara öllum fyrispurnum fljótt og
              örugglega. Mikilvægt er að sem mestar upplýsingar komi fram og
              reyna hafa nákvæma verklýsingu. Myndir af verkinu geta hjálpað
              mikið til að meta umfang verkefnis.
            </p>
          </FadeIn>
        </div>
        <Form />
      </SliceContainer>
    </section>
  )
}
