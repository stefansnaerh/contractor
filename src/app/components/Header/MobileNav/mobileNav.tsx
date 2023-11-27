'use client'
import { useState } from 'react'

import { PrismicNextLink } from '@prismicio/next'

import ScrollToSection from '../../ScrollToSection/scrollToSection'
import cx from 'classnames'
import { HeaderDocumentData } from '@/prismicio-types'

export default function MobileNav({
  setIsMobileNavOpen,
  content,
}: {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>

  content: HeaderDocumentData
}) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>()

  const toggleShowNav = () => {
    setShowMobileNav((prevShowMobileNav) => !prevShowMobileNav)
    setIsMobileNavOpen((prevShowMobileNav) => !prevShowMobileNav)
  }

  return (
    <>
      <button
        onClick={toggleShowNav}
        aria-label="Takki til að sýna farsíma valmynd"
        className="smmd:hidden flex justify-between flex-col h-[30px] w-56 self-center pr-24 "
      >
        <div
          className={cx(
            'bg-white h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ',
            {
              ['rotate-45 translate-y-[13.6px]']: showMobileNav,
              ['']: !showMobileNav,
            }
          )}
        ></div>
        <div
          className={cx(
            'bg-white h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ',
            {
              ['opacity-0']: showMobileNav,
            }
          )}
        ></div>
        <div
          className={cx(
            'bg-white h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ',
            {
              ['-rotate-45 -translate-y-[13.6px]']: showMobileNav,
              ['']: !showMobileNav,
            }
          )}
        ></div>
      </button>

      <nav
        className={cx(
          ' smmd:hidden absolute z-10 flex  flex-col gap-fluid-72 bg-gradient-to-b from-pureBlack to-black top-[90px] xs:top-[100px] overflow-y-auto h-fill min-h-[100vh] w-fill px-fluid-40 py-fluid-56 xs:py-fluid-72 xs:px-fluid-56  transform duration-500 ease-in-out',
          { ['ml-fill']: !showMobileNav, ['ml-0']: showMobileNav }
        )}
      >
        <ul className="text-lg flex flex-col gap-fluid-40 xs:gap-fluid-48 ">
          <li>
            <PrismicNextLink
              onClick={() => setShowMobileNav(false)}
              aria-label={`Hlekkur sem fer með þig á ${content.first_link_text}`}
              field={content.first_link}
              className="text-white "
            >
              {content.first_link_text}
            </PrismicNextLink>
          </li>
          <li>
            <PrismicNextLink
              onClick={() => setShowMobileNav(false)}
              aria-label={`Hlekkur á ${content.second_link_name}`}
              field={content.second_link}
              className=" text-white"
            >
              {content.second_link_name}
            </PrismicNextLink>
          </li>
          <li>
            <PrismicNextLink
              onClick={() => setShowMobileNav(false)}
              aria-label={`Hlekkur á ${content.third_link_text}`}
              field={content.third_link}
              className=" text-white"
            >
              {content.third_link_text}
            </PrismicNextLink>
          </li>
          <li>
            <PrismicNextLink
              onClick={() => setShowMobileNav(false)}
              aria-label={`Hlekkur á ${content.fourth_link_text}`}
              field={content.fourth_link}
              className=" text-white"
            >
              {content.fourth_link_text}
            </PrismicNextLink>
          </li>
        </ul>
        <ScrollToSection
          setShowMobileNav={setShowMobileNav}
          buttonText={content.button_text}
          ariaLabel={`Hlekkur til að fara á ${content.button_text}`}
          sectionID="contact"
        />
      </nav>
    </>
  )
}
