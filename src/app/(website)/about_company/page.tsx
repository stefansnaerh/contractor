import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { AboutCompanyDocument } from '../../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../../slices'
import { PrismicNextImage } from '@prismicio/next'

import RichText from '../../components/RichText/RichText'

import { FadeIn } from '../../components/Fade/fade'
import SliceContainer from '../../components/SliceContainer/sliceContainer'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('about_company')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Apiko() {
  const client = createClient()

  const page = await client.getSingle<AboutCompanyDocument>('about_company')
  const section = page.data

  return (
    <section className=" mt-[90px] xs:mt-[100px] md:mt-[120px] text-black">
      {/* ------------------------ hides on 1025px -----------------------------*/}
      {section.image && (
        <div className="relative hidden overflow-hidden w-fill px-fluid-8 md:hidden">
          <div className="relative pb-[70%] ">
            <PrismicNextImage
              field={section.image}
              className="object-cover z-0 rounded-12"
              imgixParams={{ fit: 'crop' }}
              priority
              fill
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>
      )}
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
        {section.image && (
          <FadeIn className=" flex relative overflow-hidden w-fill ">
            <div className="relative  pb-[64%] smmd:pb-[95%] md:pb-[80%] xl:pb-[60%] w-fill">
              <PrismicNextImage
                field={section.image}
                className="object-cover z-0 rounded-12 "
                imgixParams={{ fit: 'crop' }}
                priority
                fill
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </FadeIn>
        )}
      </SliceContainer>

      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
