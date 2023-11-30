'use client'

import Script from 'next/script'

export default function Form() {
  return (
    <>
      {' '}
      <iframe
        data-tally-src="https://tally.so/embed/mBxAN4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="1"
        title="Fá tilboð"
      ></iframe>
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          Tally.loadEmbeds()
        }}
      />
    </>
  )
}
