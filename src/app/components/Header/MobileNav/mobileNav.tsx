'use client'
import { useState } from 'react'

import { KeyTextField, LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import ChevronDown from '../../../icons/ChevronDown.svg'
import CalendarIcon from '../../../icons/Calendar.svg'
import Button from '../../Button/Button'
import cx from 'classnames'

export default function MobileNav({
  firstLink,
  firstLinkText,
  buttonLink,
  buttonText,
}: {
  firstLink: LinkField
  firstLinkText: KeyTextField
  buttonLink: LinkField
  buttonText: KeyTextField
}) {
  const [showNestedNavElements, setShowNestedNavElements] =
    useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [showMobileNav, setShowMobileNav] = useState<boolean>()

  const showNavGroup = (i: number) => {
    setShowNestedNavElements((prevShowNav) =>
      currentIndex === i ? !prevShowNav : true
    )
    setCurrentIndex(i)
  }
  const toggleShowNav = () => {
    setShowMobileNav((prevShowMobileNav) => !prevShowMobileNav)
    setShowNestedNavElements(false)
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
          ' smmd:hidden absolute z-10 flex  flex-col gap-fluid-72 bg-softWhite top-[90px] xs:top-[100px] overflow-y-auto h-fill min-h-[calc(100vh-100px)] w-fill px-fluid-40 py-fluid-56 xs:py-fluid-72 xs:px-fluid-56  transform duration-500 ease-in-out',
          { ['ml-fill']: !showMobileNav, ['ml-0']: showMobileNav }
        )}
      >
        <ul className="text-[24px] flex flex-col gap-fluid-40 xs:gap-fluid-48 ">
          <li>
            {' '}
            <PrismicNextLink
              onClick={() => setShowMobileNav(false)}
              aria-label={`Hlekkur sem fer með þig á ${firstLinkText}`}
              field={firstLink}
              className="hover:text-pureBlack transition-all duration-75 ease-in-out "
            >
              {firstLinkText}
            </PrismicNextLink>
          </li>
        </ul>
        <Button
          text={buttonText}
          type="anchor"
          href={buttonLink}
          ariaLabel={`Hlekkur til að fara með þig á ${buttonText}`}
          className="bg-brown  text-white font-medium  hover:bg-brownHover transition-all duration-300 ease-in-out"
        />
      </nav>
    </>
  )
}
