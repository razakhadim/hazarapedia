import React from 'react'
import useStoryblok from '../utils/storyblok'
import EnglishArticleTemplate from '../components/pages/englishArticle/index'

const EnglishArticle = ({ pageContext, location }) => {
  const story = useStoryblok(pageContext.story, location)

  return <EnglishArticleTemplate blok={story.content} />
}

export default EnglishArticle