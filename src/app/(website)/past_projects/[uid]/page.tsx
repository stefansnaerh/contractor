import { Metadata } from 'next'
import { createClient } from '../../../../../prismicio'
import { ProjectDocument } from '../../../../../prismicio-types'
import { PrismicNextImage } from '@prismicio/next'
import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import { FadeIn } from '@/src/app/components/Fade/fade'

type Params = { uid: string }

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client.getByUID('project', params.uid)

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Education({ params }: { params: Params }) {
  const client = createClient()

  const page = await client.getByUID<ProjectDocument>('project', params.uid)
  const section = page.data

  return (
    <section className="font-poppins text-black  mt-[90px] xs:mt-[100px] md:mt-[120px]  flex flex-col">
      <SliceContainer className="w-fill flex flex-col ">
        <div className="flex flex-col gap-fluid-48 xs:gap-fluid-56 lg:gap-fluid-80 w-fill self-start">
          {section.title && (
            <FadeIn className="self-start">
              <h1 className="text-h2 font-regular  border-b-[3px] pb-4 border-y-orange w-fit ">
                {section.title}
              </h1>
            </FadeIn>
          )}
          {section.paragraph && (
            <FadeIn className="max-w-[900px]">
              <p>{section.paragraph}</p>
            </FadeIn>
          )}
          <FadeIn className="flex overflow-hidden flex-col w-fill gap-fluid-48 sm:gap-fluid-56  sm:flex-row sm:flex-wrap sm:justify-center">
            {section.images?.map((item, index) => {
              return (
                <FadeIn
                  className="flex flex-col font-body align-middle content-center gap-fluid-12 sm:w-[45%] md:w-[30%] xl:w-[22%] "
                  key={index}
                >
                  <div className="relative w-fill  sm:w-fill  self-center">
                    <div className="relative pb-[100%] ">
                      <PrismicNextImage
                        field={item.image}
                        className="object-cover z-0 rounded-12"
                        imgixParams={{ fit: 'crop' }}
                        fill
                        alt={''}
                        sizes="(max-width: 768px) 100vw"
                        priority
                      />
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </FadeIn>
        </div>
      </SliceContainer>
    </section>
  )
}
