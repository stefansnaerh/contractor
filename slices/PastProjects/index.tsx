import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Fade } from '@/src/app/components/Fade/fade'
import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import { PrismicNextLink } from '@prismicio/next'
import { PrismicNextImage } from '@prismicio/next'

import ArrowRight from '../../src/app/icons/ArrowRight.svg'

/**
 * Props for `PastProjects`.
 */
export type PastProjectsProps = SliceComponentProps<Content.PastProjectsSlice>

/**
 * Component for "PastProjects" Slices.
 */
const PastProjects = ({ slice }: PastProjectsProps): JSX.Element => {
  const section = slice.primary

  return (
    <SliceContainer className="bg-white" lessPadding>
      <section className="text-black flex flex-col gap-fluid-40 md:gap-fluid-96 overflow-hidden w-fill ">
        <Fade className="flex flex-col gap-fluid-40 md:flex-row md:justify-between lg:px-[4%]">
          {section.title && (
            <div className=" border-b-[3px] pb-4 border-y-orange h-fit w-fit">
              <h2 className="font-headline text-h2 font-semiBold h-fit w-fit">
                {section.title}
              </h2>
            </div>
          )}
        </Fade>
        <Fade className="flex noScrollbar gap-fluid-24 sm:gap-fluid-32 lg:gap-fluid-48 overflow-scroll snap-x snap-mandatory lg:overflow-hidden lg:flex-wrap lg:justify-center">
          {slice.items?.map((item, index) => {
            console.log(item)
            return (
              <PrismicNextLink
                field={item.link}
                key={index}
                className="flex group flex-col justify-around gap-fluid-16  transition-all duration-300 ease-in-out min-w-[80%] md:min-w-[45%] lg:min-w-[30%] lg:max-w-[30%]"
              >
                <div className="relative snap-center  overflow-hidden ">
                  <div className="relative pb-[110%] sm:pb-[78%] ">
                    <PrismicNextImage
                      field={item.image}
                      className="object-cover z-0 rounded-12 group-hover:scale-105 transform duration-300"
                      imgixParams={{ fit: 'crop' }}
                      priority
                      fill
                      sizes="(max-width: 768px) 100vw"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between px-fluid-18">
                  <h3 className="font-body font-bold text-paragraph  xs:text-lg ">
                    {item.adress}
                  </h3>
                  <div className="flex xs:gap-8 gap-6 justify-center">
                    <p className="font-body font-bold text-paragraph xs:text-lg p-0 self-center ">
                      {item.link_name}
                    </p>
                    <ArrowRight className="xs:h-20 h-[14px]  w-[28px] xs:w-[36px] self-center transition-all duration-300 group-hover:pl-16 " />
                  </div>
                </div>
              </PrismicNextLink>
            )
          })}
        </Fade>
      </section>
    </SliceContainer>
  )
}

export default PastProjects
