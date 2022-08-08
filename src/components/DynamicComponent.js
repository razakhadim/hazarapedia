import React from 'react'
import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
import BlogPost from './BlogPostOld'
import Slide from './Slide'
import Placeholder from './Placeholder'
import ArticleTeaser from './ArticleTeaser'
import FeaturedArticles from './FeaturedArticles'
import PostsList from './PostsList'
import TextSection from './sections/textSection'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'blogpost': BlogPost,
  'slide': Slide,
  'article-teaser': ArticleTeaser,
  'featured-articles': FeaturedArticles,
  'textSection': TextSection,
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid}/>
  }
 
  return  blok.component ? <Placeholder componentName={blok.component}/> : null
}

export default DynamicComponent
