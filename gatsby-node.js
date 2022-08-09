const path = require('path')

function rewriteSlug(slug) {
  const defaultLanguage = 'en/'
  let newSlug = slug
  // replaces /de/home with /de
  newSlug = newSlug.replace('home', '')
  // replaces /en/blog/first-post with /blog/first-post
  newSlug = newSlug.replace(defaultLanguage, '')
  return newSlug
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js')
    const pageTemplate = path.resolve('src/templates/page.js')
    const englishArticleTemplate = path.resolve('src/templates/englishArticle.js')

    resolve(
      graphql(
        `{
          posts: allStoryblokEntry(filter: {field_component: {eq: "blogPost"}}) {
            edges {
              node {
                content
                field_component
                id
                full_slug
                slug
                created_at(formatString: "DD MMM YYYY HH:m")
                name
              }
            }
          }
          pages: allStoryblokEntry(filter: {field_component: {eq: "page"}}) {
            edges {
              node {
                id
                name
                slug
                field_component
                full_slug
                content
              }
            }
          }
          englishArticles: allStoryblokEntry(filter: {field_component: {eq: "englishArticle"}}) {
            edges {
              node {
                id
                name
                slug
                field_component
                full_slug
                content
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const allPosts = result.data.posts.edges
        const allPages = result.data.pages.edges
        const allEnglishArticles = result.data.englishArticles.edges

        allPosts.forEach((entry) => {
          const slug = entry.node.full_slug
          const page = {
            path: `/${slug}`,
            component: blogPostTemplate,
            context: {
              story: entry.node
            }
          }
          createPage(page)
        })

        allEnglishArticles.forEach((entry) => {
          const slug = entry.node.full_slug
          const page = {
            path: `/${slug}`,
            component: englishArticleTemplate,
            context: {
              story: entry.node
            }
          }
          createPage(page)
        }
        )

        allPages.forEach((entry) => {
          let slug = entry.node.full_slug
          const page = {
            path: `/${slug}`,
            component: pageTemplate,
            context: {
              story: entry.node
            }
          }
          createPage(page)
        })
      })
    )
  })
}
