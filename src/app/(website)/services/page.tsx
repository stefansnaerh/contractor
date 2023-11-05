import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { ServicesDocument } from '../../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../../slices'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('services')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Apiko() {
  const client = createClient()

  const page = await client.getSingle<ServicesDocument>('services')

  return (
    <section className=" mt-[90px] xs:mt-[100px] md:mt-[120px] text-black">
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
