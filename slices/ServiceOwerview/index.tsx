import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import { Fade } from '@/src/app/components/Fade/fade'
import { PrismicNextLink } from '@prismicio/next'

import ArrowRight from '@/src/app/icons/ArrowRight.svg'
import ToolsIcon from '@/src/app/icons/ToolsIcon.svg'

/**
 * Props for `ServiceOverview`.
 */
export type ServiceOverviewProps =
  SliceComponentProps<Content.ServiceOwerviewSlice>

/**
 * Component for "ServiceOverview" Slices.
 */
const ServiceOverview = ({ slice }: ServiceOverviewProps): JSX.Element => {
  const section = slice.primary
  console.log(slice)

  if (slice.variation === 'default') {
    return (
      <SliceContainer className="bg-white" lessPadding>
        <section className="text-black flex flex-col gap-fluid-40 md:gap-fluid-96 overflow-hidden ">
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
                  field={item.service_link}
                  key={index}
                  className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory snap-always snap-center bg-pinkCard hover:bg-orange hover:text-softWhite px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] lg:max-w-[30%]"
                >
                  <div className="flex justify-between">
                    <h3 className="text-h3 font-headline font-semiBold self-center">
                      {item.service_title}
                    </h3>
                  </div>

                  <p className="text-md font-regular font-body line-clamp-4">
                    {item.service_text}
                  </p>
                  <div className="flex w-fill justify-between">
                    <ToolsIcon className="self-end h-26 w-26" />
                    <div className="flex self-end pt-fluid-24">
                      <p className="text-paragraph font-body font-semiBold">
                        {item.service_link_text}
                      </p>
                      <ArrowRight className="self-center h-16 w-32 transition-all duration-300 group-hover:pl-16 " />
                    </div>
                  </div>
                </PrismicNextLink>
              )
            })}
          </Fade>
        </section>
      </SliceContainer>
    )
  } else if (slice.variation === 'noSlideshow') {
    return (
      <SliceContainer className="bg-white" lessPadding>
        <section className="text-black flex flex-col gap-fluid-40 md:gap-fluid-96 overflow-hidden ">
          <Fade className="flex flex-col gap-fluid-40 md:flex-row md:justify-between lg:px-[4%]">
            {section.title && (
              <div className=" border-b-[3px] pb-4 border-y-orange h-fit w-fit">
                <h2 className="font-headline text-h2 font-semiBold h-fit w-fit">
                  {section.title}
                </h2>
              </div>
            )}
          </Fade>
          <Fade className="flex   gap-fluid-48 overflow-hidden flex-wrap lg:justify-center">
            {slice.items?.map((item, index) => {
              console.log(item)
              return (
                <PrismicNextLink
                  field={item.service_link}
                  key={index}
                  className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40   bg-pinkCard hover:bg-orange hover:text-softWhite px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:max-w-[45%] lg:max-w-[30%]"
                >
                  <div className="flex justify-between">
                    <h3 className="text-h3 font-headline font-semiBold self-center">
                      {item.service_title}
                    </h3>
                  </div>

                  <p className="text-md font-regular font-body ">
                    {item.service_text}
                  </p>
                  <div className="flex w-fill justify-between">
                    <ToolsIcon className="self-end h-26 w-26" />
                    <div className="flex self-end pt-fluid-24">
                      <p className="text-paragraph font-body font-semiBold">
                        {item.service_link_text}
                      </p>
                      <ArrowRight className="self-center h-16 w-32 transition-all duration-300 group-hover:pl-16 " />
                    </div>
                  </div>
                </PrismicNextLink>
              )
            })}
          </Fade>
        </section>
      </SliceContainer>
    )
  } else return <></>
}

export default ServiceOverview
