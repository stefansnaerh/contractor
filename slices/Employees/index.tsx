import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import { FadeIn } from '@/src/app/components/Fade/fade'

export type EmployeesProps = SliceComponentProps<Content.EmployeesSlice>

const Employees = ({ slice }: EmployeesProps): JSX.Element => {
  const section = slice.primary
  return (
    <SliceContainer>
      <section className="flex flex-col w-fill text-black gap-fluid-56 md:gap-fluid-96">
        {section.title && (
          <FadeIn>
            <h2 className="text-h2 font-semiBold font-headline border-b-[3px] pb-4 border-y-orange w-fit">
              {section.title}
            </h2>
          </FadeIn>
        )}
        <div className="flex overflow-hidden flex-col w-fill gap-fluid-48 md:gap-fluid-56  sm:flex-row sm:flex-wrap sm:justify-center">
          {slice.items?.map((item, index) => {
            return (
              <FadeIn
                className="flex flex-col font-body align-middle content-center gap-fluid-12 sm:w-[45%] md:w-[30%] xl:w-[22%] "
                key={index}
              >
                <div className="relative w-fill xxs:w-[80%] sm:w-fill  self-center">
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
                <h3 className="mt-8 text-lg text-black font-regular w-fit self-center">
                  {item.name}
                </h3>
                <h4 className="text-md text-black font-regular w-fit self-center">
                  {item.position}
                </h4>
              </FadeIn>
            )
          })}
        </div>
      </section>
    </SliceContainer>
  )
}

export default Employees
