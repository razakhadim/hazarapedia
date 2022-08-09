import React from 'react'
import { sbEditable } from '@storyblok/storyblok-editable'
import { render } from 'storyblok-rich-text-react-renderer'
import SectionMapper from '../../common/sectionMapper'
import PageLayout from '../../common/PageLayout'

import * as Styled from './BlogPost.styled.js'

const BlogPostTemplate = ({ blok }) => {

  const featuredImage = blok.content.featuredImage.filename
  const blogTitle = blok.content.blogTitle || blok.name
  const blogIntro = render(blok.content && blok.content.blogIntro)
  const sections = blok.content && blok.content.sections

  return (
    <PageLayout>
      <div {...sbEditable(blok)}>
        <Styled.BlogTitle>
          {blogTitle}
        </Styled.BlogTitle>
        <Styled.BlogIntro>
          {blogIntro}
        </Styled.BlogIntro>
        <Styled.FeatureImage src={featuredImage} alt={featuredImage.alt} />
        {sections && sections.map(section =>
          <SectionMapper
            blok={section}
          />)
        }
      </div>
    </PageLayout>

  )
}

export default BlogPostTemplate