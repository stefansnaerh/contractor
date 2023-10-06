import { createClient } from '../../../../prismicio'
import { PrismicNextLink } from '@prismicio/next'

import Logo from '../../icons/SH-verk-logo.svg'
import Button from '../Button/Button'
import MobileNav from './MobileNav/mobileNav'
import ScrollToSection from '../ScrollToSection/scrollToSection'

export default async function Header() {
  const client = createClient()

  const data = await client.getSingle('header')
  const content = data.data

  return (
    <header className="fixed top-0  left-0 right-0 justify-between flex  h-[90px] xs:h-[100px] md:h-[120px] z-50 font-headline  text-md font-semiBold text-softBlack">
      <a aria-label="hlekkur til að fara heim á forsíðu" href="/" className="">
        <Logo className="h-[90px] xs:h-[100px] md:h-120 lg:w-[200px] w-[180px] pl-24" />
      </a>
      <MobileNav
        firstLink={content.first_link}
        firstLinkText={content.first_link_text}
        buttonLink={content.button_link}
        buttonText={content.button_text}
      />
      <nav className="hidden smmd:flex gap-fluid-40  text-white xl:gap-fluid-72 pr-24 ">
        <div className="flex self-center  gap-fluid-12 lg:gap-fluid-56 ">
          <PrismicNextLink
            aria-label={`Hlekkur á ${content.first_link_text}`}
            field={content.first_link}
            className=" hover:bg-softWhite hover:text-black py-fluid-16 px-fluid-24 rounded-16 hover:shadow-nav transition-all duration-300 ease-in-out"
          >
            {content.first_link_text}
          </PrismicNextLink>
          <PrismicNextLink
            aria-label={`Hlekkur á ${content.second_link_name}`}
            field={content.second_link}
            className=" hover:bg-softWhite hover:text-black py-fluid-16 px-fluid-24 rounded-16 hover:shadow-nav transition-all duration-300 ease-in-out"
          >
            {content.second_link_name}
          </PrismicNextLink>

          <ScrollToSection
            sectionID={data.uid}
            buttonText={content.scroll_to_section_text}
          />
          <PrismicNextLink
            aria-label={`Hlekkur á ${content.fourth_link_text}`}
            field={content.fourth_link}
            className=" hover:bg-softWhite hover:text-black py-fluid-16 px-fluid-24 rounded-16 hover:shadow-nav transition-all duration-300 ease-in-out"
          >
            {content.fourth_link_text}
          </PrismicNextLink>
        </div>
        <Button
          text={content.button_text}
          type="anchor"
          ariaLabel={`Hlekkur til að fara á ${content.button_text}`}
          href={content.button_link}
          className="bg-orange hover:bg-orangeHover text-white  font-medium self-center hover:bg-brownHover transition-all duration-300 ease-in-out"
        />
      </nav>
    </header>
  )
}
