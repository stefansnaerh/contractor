'use client'

import { useState, useEffect } from 'react'

export default function Form() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient ? (
        <div className="lg:w-[65%]">
          <div id="ff-compose"></div>
          <script
            async
            defer
            src="https://formfacade.com/include/110808910195665411918/form/1FAIpQLSfRKdf-wyQIzzq362Wo6ZpOmujIDSCBhcc0Gd1fY2UOli8k1w/classic.js?div=ff-compose"
          ></script>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
