import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import SectionMapper from '../../common/sectionMapper'
import { MARK_STYLED } from 'storyblok-rich-text-react-renderer'

const EnglishArticleTemplate = ({ blok }) => {

  const sections = blok && blok.sections
  const featuredImage = blok.featuredImage.filename

  const hasTitle = blok?.title && blok.title.length ? (
    <h1 className="text-5xl font-bold font-serif text-primary tracking-wide text-center py-8">
      {blok.title}
    </h1>)
    : null

  return (

    <div {...sbEditable(blok)}>
      {hasTitle}
      {featuredImage}
      <img src={featuredImage} alt={blok.featuredImage.alt} />
      {sections && sections.map(section =>
        <SectionMapper blok={section} />)
      }
    </div>
  )
}

export default EnglishArticleTemplate