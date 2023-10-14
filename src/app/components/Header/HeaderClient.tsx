'use client'

import { PrismicNextLink } from '@prismicio/next'
import { HeaderDocumentData } from '@/prismicio-types'
import { PrismicDocumentWithUID } from '@prismicio/client'
import { useState, useEffect, useRef } from 'react'

import cx from 'classnames'

import Logo from '../../icons/SH-verk-logo.svg'
import Button from '../Button/Button'
import MobileNav from './MobileNav/mobileNav'
import ScrollToSection from '../ScrollToSection/scrollToSection'

export default function HeaderClient({
  data,
  content,
}: {
  data: PrismicDocumentWithUID
  content: HeaderDocumentData
}) {
  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const headerElement = useRef<HTMLHeadElement>(null)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true)
      } else {
        // if scroll up show the navbar
        setShow(false)
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  //fixed top-0 z-50 bg-gradient-to-b from-pureBlack to-black left-0 right-0 justify-between flex  h-[90px] xs:h-[100px] md:h-[120px] font-headline  text-md font-semiBold text-softBlack transition-all duration-150
  // className={`active fixed top-0 z-50 bg-gradient-to-b from-pureBlack to-black left-0 right-0 justify-between flex  h-[90px] xs:h-[100px] md:h-[120px] font-headline  text-md font-semiBold text-softBlack  ${
  //     show && 'hidden'
  // }`}

  return (
    <header
      ref={headerElement}
      className={cx(
        ' fixed top-0 z-50 bg-gradient-to-b from-pureBlack to-black left-0 right-0 justify-between flex  h-[90px] xs:h-[100px] md:h-[120px] font-headline  text-md font-semiBold text-softBlack transition-all duration-500 ',
        {
          ['-top-[120px]']: show,
        }
      )}
    >
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
