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
        {' '}
        <div className="absolute z-20 w-fill h-fill bg-gradient-to-b from-pureBlack to-backgroundGrey mix-blend-multiply "></div>
        <div className="relative z-0 lg:pb-[60%] xxs:pb-[150%] md:pb-[70%] xl:pb-[50%]  sm:pb-[90%] pb-[165%]">
          <PrismicNextImage
            field={content.hero_image}
            className="object-cover z-0 "
            imgixParams={{ fit: 'crop' }}
            priority
            fill
            sizes=""
          />
        </div>
        <Fade className="absolute flex flex-col gap-fluid-48 max-w-[90%] z-40 m-auto w-fit left-0 right-0 text-center  text-white font-headline  top-[30%] ">
          <h1 className="text-center text-h4 font-semiBold  leading-snug ">
            {content.hero_headline}
          </h1>
          <h2 className="text-h3 font-semiBold">{content.hero_sub_headline}</h2>
        </Fade>
      </div>
      <div className="pt-fluid-96">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </section>
  )
}
