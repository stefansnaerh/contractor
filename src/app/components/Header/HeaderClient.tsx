'use client'

import { PrismicNextLink } from '@prismicio/next'
import { HeaderDocumentData } from '@/prismicio-types'

import { useState, useEffect, useRef } from 'react'

import cx from 'classnames'

import Logo from '../../icons/SH-verk-logo.svg'
import Button from '../Button/Button'
import MobileNav from './MobileNav/mobileNav'

export default function HeaderClient({
  content,
}: {
  content: HeaderDocumentData
}) {
  const [show, setShow] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const headerElement = useRef<HTMLHeadElement>(null)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean | undefined>()

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

  return (
    <header
      ref={headerElement}
      className={cx(
        'fixed z-50 bg-gradient-to-b from-pureBlack to-black left-0 right-0 justify-between flex  h-[90px] xs:h-[100px] md:h-[120px] font-headline  text-md font-semiBold text-softBlack transition-all duration-500 ',
        {
          ['-top-[120px]']: show && !isMobileNavOpen,
          ['top-0']: !show && !isMobileNavOpen,
        }
      )}
    >
      <a aria-label="hlekkur til að fara heim á forsíðu" href="/" className="">
        <Logo className="h-[90px] xs:h-[100px] md:h-120 lg:w-[200px] w-[180px] pl-24" />
      </a>
      <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} content={content} />
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

          {/* { <ScrollToSection
            sectionID={data.uid}
            buttonText={content.scroll_to_section_text}
          />} */}
          <PrismicNextLink
            aria-label={`Hlekkur á ${content.third_link_text}`}
            field={content.third_link}
            className=" hover:bg-softWhite hover:text-black py-fluid-16 px-fluid-24 rounded-16 hover:shadow-nav transition-all duration-300 ease-in-out"
          >
            {content.third_link_text}
          </PrismicNextLink>
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
