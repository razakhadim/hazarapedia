import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import DynamicComponent from '../../../components/dynamicComponent'
import SectionMapper from '../../common/sectionMapper'

const EnglishArticleTemplate = ( {blok} ) => {

  console.log('blok', blok)
    const content =
    blok?.body &&
    blok.body.map(childBlok => <SectionMapper blok={childBlok} key={childBlok._uid}/>)
  const hasTitle = blok?.title && blok.title.length ? (
  <h1 className="text-5xl font-bold font-serif text-primary tracking-wide text-center py-8">
    { blok.title }
    </h1>) 
    : null
    
  return (
    <div {...sbEditable(blok)}>
        { hasTitle }
        { content }
    </div>
  )
}

export default EnglishArticleTemplate