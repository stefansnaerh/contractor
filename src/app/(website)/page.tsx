import { Metadata } from 'next'
import { createClient } from '../../../prismicio'
import { FrontPageDocument } from '../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../slices'
import { PrismicNextImage } from '@prismicio/next'
import { Fade } from '../components/Fade/fade'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('front_page')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Home() {
  const client = createClient()

  const page = await client.getSingle<FrontPageDocument>('front_page')
  const content = page.data

  return (
    <section className="relative font-poppins">
      <div className="relative w-fill  overflow-hidden  ">
        <div className="absolute z-20 w-fill h-fill bg-gradient-to-b from-pureBlack to-backgroundGrey mix-blend-multiply "></div>
        <div className="relative z-0 lg:pb-[60%] xxs:pb-[150%] md:pb-[70%] xl:pb-[50%]  sm:pb-[90%] pb-[165%]">
          <PrismicNextImage
            field={content.hero_image}
            className="object-cover z-30 "
            imgixParams={{ fit: 'crop' }}
            priority
            fill
            sizes=""
          />
        </div>
        <Fade className="absolute z-20 m-auto  right-[15%] text-center max-w-[240px] leading-snug top-[20%] xxs:hidden">
          <h1 className=" text-center text-black text-h1 max-w-[240px] leading-snug ">
            {content.hero_headline}
          </h1>
        </Fade>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
