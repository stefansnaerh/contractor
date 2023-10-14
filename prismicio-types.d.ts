// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type FrontPageDocumentDataSlicesSlice = CompanyInfoSlice | ServiceOwerviewSlice

/**
 * Content for front_page documents
 */
interface FrontPageDocumentData {
  /**
   * Hero Image field in *front_page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.hero_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>

  /**
   * Hero Headline field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.hero_headline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_headline: prismic.KeyTextField

  /**
   * Hero Sub Headline field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.hero_sub_headline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_sub_headline: prismic.KeyTextField

  /**
   * Slice Zone field in *front_page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FrontPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: front_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *front_page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: front_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *front_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: front_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * front_page document from Prismic
 *
 * - **API ID**: `front_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FrontPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FrontPageDocumentData>,
    'front_page',
    Lang
  >

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * First link text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.first_link_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_link_text: prismic.KeyTextField

  /**
   * First link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.first_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  first_link: prismic.LinkField

  /**
   * Second link name field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.second_link_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  second_link_name: prismic.KeyTextField

  /**
   * Second link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.second_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  second_link: prismic.LinkField

  /**
   * Scroll to section text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.scroll_to_section_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  scroll_to_section_text: prismic.KeyTextField

  /**
   * Fourth link text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.fourth_link_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fourth_link_text: prismic.KeyTextField

  /**
   * Fourth link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.fourth_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  fourth_link: prismic.LinkField

  /**
   * Button text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField

  /**
   * Button link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.button_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField

  /**
   * Background image field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HeaderDocumentData>, 'header', Lang>

export type AllDocumentTypes = FrontPageDocument | HeaderDocument

/**
 * Primary content in *CompanyInfo → Primary*
 */
export interface CompanyInfoSliceDefaultPrimary {
  /**
   * Title field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField

  /**
   * Button text field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField

  /**
   * Button link field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField

  /**
   * First image field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.first_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  first_image: prismic.ImageField<never>

  /**
   * Second image field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.second_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  second_image: prismic.ImageField<never>

  /**
   * Third image field in *CompanyInfo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: company_info.primary.third_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  third_image: prismic.ImageField<never>
}

/**
 * Default variation for CompanyInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CompanyInfoSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<CompanyInfoSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *CompanyInfo*
 */
type CompanyInfoSliceVariation = CompanyInfoSliceDefault

/**
 * CompanyInfo Shared Slice
 *
 * - **API ID**: `company_info`
 * - **Description**: CompanyInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CompanyInfoSlice = prismic.SharedSlice<
  'company_info',
  CompanyInfoSliceVariation
>

/**
 * Primary content in *ServiceOwerview → Primary*
 */
export interface ServiceOwerviewSliceDefaultPrimary {
  /**
   * Title field in *ServiceOwerview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_owerview.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField
}

/**
 * Primary content in *ServiceOwerview → Items*
 */
export interface ServiceOwerviewSliceDefaultItem {
  /**
   * Service title field in *ServiceOwerview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_owerview.items[].service_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_title: prismic.KeyTextField

  /**
   * Service text field in *ServiceOwerview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_owerview.items[].service_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_text: prismic.KeyTextField

  /**
   * Service link text field in *ServiceOwerview → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_owerview.items[].service_link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_link_text: prismic.KeyTextField

  /**
   * Service link field in *ServiceOwerview → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: service_owerview.items[].service_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  service_link: prismic.LinkField
}

/**
 * Default variation for ServiceOwerview Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceOwerviewSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ServiceOwerviewSliceDefaultPrimary>,
  Simplify<ServiceOwerviewSliceDefaultItem>
>

/**
 * Slice variation for *ServiceOwerview*
 */
type ServiceOwerviewSliceVariation = ServiceOwerviewSliceDefault

/**
 * ServiceOwerview Shared Slice
 *
 * - **API ID**: `service_owerview`
 * - **Description**: ServiceOwerview
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceOwerviewSlice = prismic.SharedSlice<
  'service_owerview',
  ServiceOwerviewSliceVariation
>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      FrontPageDocument,
      FrontPageDocumentData,
      HeaderDocument,
      HeaderDocumentData,
      AllDocumentTypes,
      CompanyInfoSlice,
      CompanyInfoSliceVariation,
      CompanyInfoSliceDefault,
      ServiceOwerviewSlice,
      ServiceOwerviewSliceVariation,
      ServiceOwerviewSliceDefault,
    }
  }
}
