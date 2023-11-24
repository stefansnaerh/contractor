// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type AboutCompanyDocumentDataSlicesSlice = EmployeesSlice

/**
 * Content for about_company documents
 */
interface AboutCompanyDocumentData {
  /**
   * Title field in *about_company*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_company.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *about_company*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_company.paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField

  /**
   * Image field in *about_company*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_company.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Slice Zone field in *about_company*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about_company.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutCompanyDocumentDataSlicesSlice>
  /**
   * Meta Description field in *about_company*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about_company.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *about_company*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_company.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *about_company*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about_company.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * about_company document from Prismic
 *
 * - **API ID**: `about_company`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutCompanyDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AboutCompanyDocumentData>,
    'about_company',
    Lang
  >

/**
 * Item in *Footer → Link group 1*
 */
export interface FooterDocumentDataLinkGroup1Item {
  /**
   * Link name field in *Footer → Link group 1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_1[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * Link field in *Footer → Link group 1*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_1[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Footer → Link group 2*
 */
export interface FooterDocumentDataLinkGroup2Item {
  /**
   * Link name field in *Footer → Link group 2*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_2[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * Link field in *Footer → Link group 2*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_2[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Link group 1 title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_1_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_1_title: prismic.KeyTextField

  /**
   * Link group 1 field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_1[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_1: prismic.GroupField<Simplify<FooterDocumentDataLinkGroup1Item>>

  /**
   * Link group 2 title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_2_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_group_2_title: prismic.KeyTextField

  /**
   * Link group 2 field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.link_group_2[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  link_group_2: prismic.GroupField<Simplify<FooterDocumentDataLinkGroup2Item>>

  /**
   * Company address field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_address: prismic.KeyTextField

  /**
   * Company phone number field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_phone_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_phone_number: prismic.KeyTextField

  /**
   * Company email field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_email: prismic.KeyTextField

  /**
   * Company SSD number field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_ssd_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_ssd_number: prismic.KeyTextField
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    'footer',
    Lang
  >

type FrontPageDocumentDataSlicesSlice =
  | CompanyInfoSlice
  | ServiceOwerviewSlice
  | PastProjectsSlice
  | WhyUsSlice

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
   * Third link text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.third_link_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  third_link_text: prismic.KeyTextField

  /**
   * Third link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.third_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  third_link: prismic.LinkField

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
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    'header',
    Lang
  >

type PastProjectsDocumentDataSlicesSlice = PastProjectsSlice

/**
 * Content for past_projects documents
 */
interface PastProjectsDocumentData {
  /**
   * Slice Zone field in *past_projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PastProjectsDocumentDataSlicesSlice>
  /**
   * Meta Description field in *past_projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: past_projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *past_projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *past_projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: past_projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * past_projects document from Prismic
 *
 * - **API ID**: `past_projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PastProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PastProjectsDocumentData>,
    'past_projects',
    Lang
  >

/**
 * Item in *project → Images*
 */
export interface ProjectDocumentDataImagesItem {
  /**
   * Image field in *project → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

type ProjectDocumentDataSlicesSlice = never

/**
 * Content for project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField

  /**
   * Images field in *project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<ProjectDocumentDataImagesItem>>

  /**
   * Slice Zone field in *project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice>
  /**
   * Meta Description field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, 'project', Lang>

type ServiceDocumentDataSlicesSlice = never

/**
 * Content for service documents
 */
interface ServiceDocumentData {
  /**
   * Title field in *service*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *service*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service.paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField

  /**
   * Slice Zone field in *service*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: service.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ServiceDocumentDataSlicesSlice>
  /**
   * Meta Description field in *service*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: service.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *service*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: service.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *service*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: service.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * service document from Prismic
 *
 * - **API ID**: `service`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServiceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ServiceDocumentData>, 'service', Lang>

type ServicesDocumentDataSlicesSlice = ServiceOwerviewSlice

/**
 * Content for services documents
 */
interface ServicesDocumentData {
  /**
   * Slice Zone field in *services*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: services.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ServicesDocumentDataSlicesSlice>
  /**
   * Meta Description field in *services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: services.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *services*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: services.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * services document from Prismic
 *
 * - **API ID**: `services`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ServicesDocumentData>,
    'services',
    Lang
  >

export type AllDocumentTypes =
  | AboutCompanyDocument
  | FooterDocument
  | FrontPageDocument
  | HeaderDocument
  | PastProjectsDocument
  | ProjectDocument
  | ServiceDocument
  | ServicesDocument

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
 * Primary content in *Employees → Primary*
 */
export interface EmployeesSliceDefaultPrimary {
  /**
   * Title field in *Employees → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employees.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField
}

/**
 * Primary content in *Employees → Items*
 */
export interface EmployeesSliceDefaultItem {
  /**
   * Image field in *Employees → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: employees.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Name field in *Employees → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employees.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField

  /**
   * Position field in *Employees → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employees.items[].position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  position: prismic.KeyTextField
}

/**
 * Default variation for Employees Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmployeesSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<EmployeesSliceDefaultPrimary>,
  Simplify<EmployeesSliceDefaultItem>
>

/**
 * Slice variation for *Employees*
 */
type EmployeesSliceVariation = EmployeesSliceDefault

/**
 * Employees Shared Slice
 *
 * - **API ID**: `employees`
 * - **Description**: Employees
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmployeesSlice = prismic.SharedSlice<
  'employees',
  EmployeesSliceVariation
>

/**
 * Primary content in *PastProjects → Primary*
 */
export interface PastProjectsSliceDefaultPrimary {
  /**
   * Title field in *PastProjects → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Link field in *PastProjects → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField

  /**
   * Link text field in *PastProjects → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.primary.link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField
}

/**
 * Primary content in *PastProjects → Items*
 */
export interface PastProjectsSliceDefaultItem {
  /**
   * Adress field in *PastProjects → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.items[].adress
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  adress: prismic.KeyTextField

  /**
   * image field in *PastProjects → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Link name field in *PastProjects → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.items[].link_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_name: prismic.KeyTextField

  /**
   * Link field in *PastProjects → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: past_projects.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Default variation for PastProjects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PastProjectsSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<PastProjectsSliceDefaultPrimary>,
  Simplify<PastProjectsSliceDefaultItem>
>

/**
 * Slice variation for *PastProjects*
 */
type PastProjectsSliceVariation = PastProjectsSliceDefault

/**
 * PastProjects Shared Slice
 *
 * - **API ID**: `past_projects`
 * - **Description**: PastProjects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PastProjectsSlice = prismic.SharedSlice<
  'past_projects',
  PastProjectsSliceVariation
>

/**
 * Primary content in *ServiceOwerview → Primary*
 */
export interface ServiceOwerviewSliceDefaultPrimary {
  /**
   * Scroll to section id field in *ServiceOwerview → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_owerview.primary.scroll_to_section_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  scroll_to_section_id: prismic.KeyTextField

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
 * Primary content in *ServiceOwerview → Primary*
 */
export interface ServiceOwerviewSliceNoSlideshowPrimary {
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
export interface ServiceOwerviewSliceNoSlideshowItem {
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
 * NoSlideshow variation for ServiceOwerview Slice
 *
 * - **API ID**: `noSlideshow`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceOwerviewSliceNoSlideshow = prismic.SharedSliceVariation<
  'noSlideshow',
  Simplify<ServiceOwerviewSliceNoSlideshowPrimary>,
  Simplify<ServiceOwerviewSliceNoSlideshowItem>
>

/**
 * Slice variation for *ServiceOwerview*
 */
type ServiceOwerviewSliceVariation =
  | ServiceOwerviewSliceDefault
  | ServiceOwerviewSliceNoSlideshow

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

/**
 * Primary content in *WhyUs → Primary*
 */
export interface WhyUsSliceDefaultPrimary {
  /**
   * Title field in *WhyUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Paragraph field in *WhyUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField

  /**
   * image field in *WhyUs → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Reason 1 field in *WhyUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.reason_1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  reason_1: prismic.KeyTextField

  /**
   * Reason 1 subtext field in *WhyUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.reason_1_subtext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  reason_1_subtext: prismic.KeyTextField

  /**
   * Reason 2 field in *WhyUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.reason_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  reason_2: prismic.KeyTextField

  /**
   * Reason 2 subtext field in *WhyUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.reason_2_subtext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  reason_2_subtext: prismic.KeyTextField

  /**
   * Reason 3 field in *WhyUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.reason_3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  reason_3: prismic.KeyTextField

  /**
   * Reason 3 subtext field in *WhyUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us.primary.reason_3_subtext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  reason_3_subtext: prismic.KeyTextField
}

/**
 * Default variation for WhyUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WhyUsSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<WhyUsSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *WhyUs*
 */
type WhyUsSliceVariation = WhyUsSliceDefault

/**
 * WhyUs Shared Slice
 *
 * - **API ID**: `why_us`
 * - **Description**: WhyUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WhyUsSlice = prismic.SharedSlice<'why_us', WhyUsSliceVariation>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      AboutCompanyDocument,
      AboutCompanyDocumentData,
      FooterDocument,
      FooterDocumentData,
      FrontPageDocument,
      FrontPageDocumentData,
      HeaderDocument,
      HeaderDocumentData,
      PastProjectsDocument,
      PastProjectsDocumentData,
      ProjectDocument,
      ProjectDocumentData,
      ServiceDocument,
      ServiceDocumentData,
      ServicesDocument,
      ServicesDocumentData,
      AllDocumentTypes,
      CompanyInfoSlice,
      CompanyInfoSliceVariation,
      CompanyInfoSliceDefault,
      EmployeesSlice,
      EmployeesSliceVariation,
      EmployeesSliceDefault,
      PastProjectsSlice,
      PastProjectsSliceVariation,
      PastProjectsSliceDefault,
      ServiceOwerviewSlice,
      ServiceOwerviewSliceVariation,
      ServiceOwerviewSliceDefault,
      ServiceOwerviewSliceNoSlideshow,
      WhyUsSlice,
      WhyUsSliceVariation,
      WhyUsSliceDefault,
    }
  }
}
