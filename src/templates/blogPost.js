import React from "react"
import useStoryblok from "../utils/storyblok"
import BlogPostTemplate from "../components/pages/BlogPost"

export default function BlogEntry({ pageContext, location }) {
  const story = useStoryblok(pageContext.story, location)

  return <BlogPostTemplate blok={story} location={location} />

}