import { FadeIn } from '../Fade/fade'

export default function Contact() {
  return (
    <div className="  relative  flex flex-col gap-fluid-40 lg:gap-fluid-48 smmd:w-[70%] md:w-[75%] self-start">
      <FadeIn className="border-b-[3px] pb-4 border-y-orange w-fit self-start">
        <h2 className="text-h2 font-headline font-semiBold">Hafðu samband!</h2>
      </FadeIn>

      <FadeIn>
        <ul className="font-regular text-paragraph font-body [&_li]:list-disc [&_li]:marker:text-orange flex flex-col gap-fluid-16">
          <span className="">Hægt er að hafa samband við okkur með að :</span>
          <li>
            Hringja í okkur í síma{' '}
            <a
              className="border-b-2 border-b-footerBlue"
              aria-label="Hlekkur til að hringja í okkur"
              href="tel:5540822"
            >
              5540822
            </a>
          </li>
          <li>
            Senda okkur tölvupóst á{' '}
            <a
              className="border-b-2 border-b-footerBlue"
              aria-label="Hlekkur til að hringja í okkur"
              href="mailto:shverk@shverk.is"
            >
              shverk@shverk.is
            </a>
          </li>
          <li>
            Fylla út formið hér á síðunni og við höfum samband við fyrsta
            tækifæri
          </li>
        </ul>
      </FadeIn>
    </div>
  )
}
