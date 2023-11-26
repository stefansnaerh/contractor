'use client'

import Script from 'next/script'

export default function Form() {
  return (
    <>
      <div className="lg:w-[65%]">
        <div id="ff-compose"></div>
        <Script
          id="form"
          src="https://formfacade.com/include/110808910195665411918/form/1FAIpQLSfRKdf-wyQIzzq362Wo6ZpOmujIDSCBhcc0Gd1fY2UOli8k1w/classic.js?div=ff-compose"
        ></Script>
      </div>
    </>
  )
}

/*export default function Form() {
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
          ></scrip>
        </div>
      ) : (
        ''
      )}
    </>
  )
}*/

/* <Script
async
defer
src="https://formfacade.com/include/110808910195665411918/form/1FAIpQLSfRKdf-wyQIzzq362Wo6ZpOmujIDSCBhcc0Gd1fY2UOli8k1w/classic.js?div=ff-compose"
></Script>

*/
