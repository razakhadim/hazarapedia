import React from 'react'
import DynamicComponent from '../../../components/dynamicComponent'
import useStoryblok from '../../../utils/storyblok'
import Layout from '../../../components/layout'
import { sbEditable } from '@storyblok/storyblok-editable'
import { render } from 'storyblok-rich-text-react-renderer'
import SectionMapper from '../../common/sectionMapper'

const BlogPostTemplate = ({blok, location}) => {
  // console.log('page ctx', pageContext)
  // const story = useStoryblok(pageContext.story, location)
  const content =
    blok.content &&
    blok.content.sections.map(childBlok => <SectionMapper blok={childBlok} key={childBlok._uid}/>)
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
   { content }
    </div>
    </Layout>
  )
}

export default BlogPostTemplate