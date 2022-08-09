import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const TextSection = ({blok}) => {

  const { 
    sectionTitle, 
    sectionImage, 
    sectionText, 
    sectionAnchorId, 
    imageLocation, 
    reverseOnMobile 
  } = blok

  return (
    <div>
      {sectionTitle}
      {render(sectionText)}
      {sectionAnchorId}
      {reverseOnMobile}
      {imageLocation}
      </div>
  )
}

export default TextSection