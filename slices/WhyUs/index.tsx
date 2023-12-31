import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import { FadeIn } from '@/src/app/components/Fade/fade'

export type WhyUsProps = SliceComponentProps<Content.WhyUsSlice>

/**
 * Component for "WhyUs" Slices.
 */
const WhyUs = ({ slice }: WhyUsProps): JSX.Element => {
  const section = slice.primary
  return (
    <SliceContainer className="bg-white" lessPadding>
      <section className="text-black flex flex-col gap-fluid-40  md:gap-fluid-96 overflow-hidden ">
        <FadeIn className="flex flex-col gap-fluid-40 md:gap-fluid-96 lg:px-[4%]">
          {section.title && (
            <div className="  h-fit w-fit">
              <h2 className="font-headline text-h5 xxs:text-h2 font-semiBold h-fit w-fit border-b-[3px] pb-4 border-y-orange ">
                {section.title}
              </h2>
            </div>
          )}
          <div className="flex flex-col md:flex-row md:justify-between  gap-fluid-40">
            {section.paragraph && (
              <p className="text-paragraph font-body font-regular md:w-[40%] md:h-fit md:pt-[5%]  ">
                {section.paragraph}
              </p>
            )}
            {section.image && (
              <FadeIn className="relative overflow-hidden md:w-[50%]">
                <div className="relative pb-[50%] md:pb-[70%] ">
                  <PrismicNextImage
                    field={section.image}
                    className="object-cover z-0 "
                    imgixParams={{ fit: 'crop' }}
                    priority
                    fill
                    alt={''}
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
              </FadeIn>
            )}
          </div>
          <div className="flex flex-col md:flex-row md:w-fill gap-fluid-40  w-[80%] xs:w-[70%] self-center pt-fluid-40 ">
            <FadeIn className="relative flex flex-col w-fill h-fill justify-center self-center">
              <span className="bg-reasonBlue h-[100px] pl-[10%] w-[50%] rounded-[360px] xs:h-[120px] md:h-[140px]"></span>
              <div className="absolute flex flex-col self-center ">
                <h3 className="font-headline text-h3 font-semiBold w-fit self-center ">
                  {section.reason_1}
                </h3>
                <p className="font-body text-paragraph w-[80%] self-center text-center">
                  {section.reason_1_subtext}
                </p>
              </div>
            </FadeIn>
            <FadeIn className="relative flex flex-col  h-fill w-fill justify-center  self-center  ">
              <span className="bg-reasonBlue h-[100px]  w-[50%] rounded-[360px] self-end md:self-start xs:h-[120px] md:h-[140px]"></span>
              <div className="absolute flex flex-col self-center ">
                <h3 className="font-headline text-h3 font-semiBold w-fit self-center ">
                  {section.reason_2}
                </h3>
                <p className="font-body text-paragraph w-[80%] self-center text-center">
                  {section.reason_2_subtext}
                </p>
              </div>
            </FadeIn>
            <FadeIn className="relative flex flex-col w-fill h-fill justify-center self-center ">
              <span className="bg-reasonBlue h-[100px]   w-[50%] rounded-[360px] xs:h-[120px] md:h-[140px]"></span>
              <div className="absolute flex flex-col self-center ">
                <h3 className="font-headline text-h3 font-semiBold w-fit self-center ">
                  {section.reason_3}
                </h3>
                <p className="font-body text-paragraph w-[80%] self-center text-center">
                  {section.reason_3_subtext}
                </p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </section>
    </SliceContainer>
  )
}

export default WhyUs
