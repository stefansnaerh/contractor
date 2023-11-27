'use client'

import { KeyTextField } from '@prismicio/client'

interface ScrollToSectionProps {
  sectionID: string
  buttonText: KeyTextField
  ariaLabel: string
}

const ScrollToSection = (props: ScrollToSectionProps) => {
  const { sectionID, buttonText, ariaLabel } = props

  const handleScroll = () => {
    const element = document.getElementById(`${sectionID}`)

    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <button
      aria-label={ariaLabel}
      onClick={handleScroll}
      className="bg-orange hover:bg-orangeHover text-white flex  gap-8 py-fluid-16 px-fluid-24 rounded-16 h-fit w-fit text-md font-headline font-semiBold transition-all duration-300 ease-in-out font-medium self-center transition-all duration-300 ease-in-out"
    >
      {buttonText}
    </button>
  )
}

export default ScrollToSection
