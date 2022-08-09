import React from 'react'
import DynamicComponent from '../../dynamicComponent'
import useStoryblok from '../../../utils/storyblok'
import Layout from '../../layout'
import { sbEditable } from '@storyblok/storyblok-editable'
import { render } from 'storyblok-rich-text-react-renderer'
import SectionMapper from '../../common/sectionMapper'

const BlogPostTemplate = ({blok, location}) => {

    const sections = blok.content && blok.content.sections
    const intro = blok.content.intro
    const title = blok.content.title
    const longText = render(blok.content.long_text)

    console.log('this is the blok', blok.content.sections )

  return (
    <Layout location={location}>
   <div {...sbEditable(blok)}>
    <h1> {title} </h1>
    <p> {intro} </p>
    <div> {longText} </div>
    {sections && sections.map(section =>
    <SectionMapper 
    blok={section}
    /> )
  }
    </div>
    </Layout>
 
  )
}

export default BlogPostTemplate