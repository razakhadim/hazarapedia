import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import DynamicComponent from '../../dynamicComponent'
import SectionMapper from '../../common/sectionMapper'

const EnglishArticleTemplate = ({ blok }) => {

  const sections = blok.content && blok.content.sections
  const hasTitle = blok?.title && blok.title.length ? (
    <h1 className="text-5xl font-bold font-serif text-primary tracking-wide text-center py-8">
      {blok.title}
    </h1>)
    : null

  return (
    <div {...sbEditable(blok)}>
      {hasTitle}
      {sections && sections.map(section =>
        <SectionMapper blok={blok} />)
      }
    </div>
  )
}

export default EnglishArticleTemplate