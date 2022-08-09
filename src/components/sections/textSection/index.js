import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import * as Styled from './TextSection.styled'

const TextSection = ({ blok }) => {

  const {
    sectionTitle,
    sectionAnchorId,
    imageLocation,
    reverseOnMobile
  } = blok

  const sectionText = render(blok.sectionText)
  const sectionImage = blok.sectionImage.filename

  return (
    <Styled.SectionWrapper id={sectionAnchorId}>
        <Styled.SectionHeading>
          {sectionTitle}
        </Styled.SectionHeading>
      <Styled.TextSectionWrapper>
      <Styled.TitleAndTextWrapper imageLocation={imageLocation}>
        {sectionText}
      </Styled.TitleAndTextWrapper>
      <Styled.ImageWrapper reverseOnMobile={reverseOnMobile} imageLocation={imageLocation}>
        <Styled.Image src={sectionImage} alt={sectionImage.alt} />
      </Styled.ImageWrapper>
      </Styled.TextSectionWrapper>
    </Styled.SectionWrapper>
  )
}

export default TextSection