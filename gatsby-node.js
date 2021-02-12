const path = require('path')
const getBaseUrl = require('./src/utils/getBaseUrl')
const { defaultLang, langTextMap, multiplePages, footerOrAside } = require('./assets/config/site')
/**
 * Add fileName and directory name of markdowns as nodes in order to filter using them
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const fileName = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'fileName',
      value: fileName,
    })

    createNodeField({
      node,
      name: 'directoryName',
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    })
  }
}
/**
 * Define graphql schema using the keys within the markdown files,
 * in order to avoid problems with null fields
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = [
    'type MarkdownRemark implements Node { frontmatter: Frontmatter }',
    `type Frontmatter {
      toolbar: Toolbar
      home: Home
      about: About
    }`,
    `type Toolbar {
      title: String
      buttonLabel: String
    }`,
    `type Home {
      title: String
      subTitle: String
      superTitle: String
      paragraph: String
      image: String
    }`,
    `type About {
      title: String
      paragraph: String
      iconNames: [String]
    }`,
  ]

  createTypes(typeDefs)
}
/**
 * Generate a website as single page or multiple pages
 */
exports.createPages = ({ graphql, actions: { createPage } }) => {

  if (multiplePages)
    return createWebsiteWithMultiplePages(graphql, createPage)
  
  return createWebsiteWithSinglePage(graphql, createPage)
}
/**
 * It takes markdown files from assets/content/pages and generates
 * a page for each file (e.g. /about /en/about)
 */
const createWebsiteWithMultiplePages = (graphql, createPage) => {
  const index = path.resolve('./src/templates/index.jsx')

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: {fields: {slug: {regex: "/pages/"}}}) {
              nodes {
                fields {
                  fileName
                  langKey
                }
              }
            }
          }
        `,
      )
      .then(({ error, data }) => {
        if (error) reject(error)

        data.allMarkdownRemark.nodes.forEach(({ fields: { langKey, fileName, }}) => {
          const page = removeLanguageCode(removeNumbersAndDashes(fileName))
          createPage({
            path: `${getBaseUrl({ defaultLang, lang: langKey })}${page === 'home' ? '' : page}`,
            component: index,
            context: {
              langKey,
              defaultLang,
              langTextMap,
              multiplePages,
              page,
            },
          })
        })

        return null
      })
    )
  })
}
/**
 * It gets language codes from markdown files and creates a page for each
 * language detected (e.g. / and /en)
 */
const createWebsiteWithSinglePage = (graphql, createPage) => {
  const index = path.resolve('./src/templates/index.jsx')

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              distinct(field: fields___langKey)
            }
          }
        `,
      ).then(({ error, data }) => {
        if (error) reject(error)

        data.allMarkdownRemark.distinct.forEach((langKey) => {
          createPage({
            path: getBaseUrl({ defaultLang, lang: langKey }),
            component: index,
            context: {
              langKey,
              defaultLang,
              langTextMap,
              multiplePages,
              footerOrAside,
            },
          })
        })

        return null
      }),
    )
  })
}

const removeNumbersAndDashes = (fileName) => {
  return fileName.replace(
    /\d+-/, ''
  )
}

const removeLanguageCode = (fileName) => {
  return fileName.replace(
    /\.[a-z]+$/i, ''
  )
}