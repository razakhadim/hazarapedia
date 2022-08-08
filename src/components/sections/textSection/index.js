import { sbEditable } from '@storyblok/storyblok-editable'
import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const TextSection = ({blok}) => {

  const { sectionTitle, sectionText } = blok
  const richText = render(sectionText)

  console.log('textSection', sectionTitle, richText)
  return (
    <div>
      {sectionTitle}
      {richText}
      
      </div>
  )
}

export default TextSection