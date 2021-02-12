import React from 'react'
import propTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/atoms/SEO'
import Toolbar from '../components/organisms/Toolbar'
import FooterOrAside from '../components/organisms/FooterOrAside'
import breakDownAllMarkdownNodes from '../utils/breakDownAllMarkdownNodes'
import fileNameToComponentName from '../utils/fileNameToComponentName'
import * as Pages from '../components/pages'
import useElementInViewPort from '../hooks/useElementsInViewPort'
import useLoadLazyAnimationClass from '../hooks/useLoadLazyAnimationClass'
import toLowerCaseFirstChart from '../utils/toLowerCaseFirstChart'
import '../utils/equalsIgnoreCase'
import '../theme/main.scss'

const Index = (
  {
    data: {
      site: {
        siteMetadata: {
          title, description, author, keywords,
        },
      },
      allMarkdownRemark: { nodes },
    },
    pathContext: {
      langKey, defaultLang, langTextMap, multiplePages, page, footerOrAside,
    },
  }
) => {

  const pageIds = {}
  const { toolbar, pages } = breakDownAllMarkdownNodes(
    nodes
  )
  pages.forEach(
    (
      { frontmatter, fields: { fileName } }
    ) => {

      const pageId = toLowerCaseFirstChart(
        fileNameToComponentName(
          fileName
        )
      )
      pageIds[pageId] = frontmatter[pageId].title

    }
  )
  const elementsInViewPort = useElementInViewPort(
    {
      elementIds: Object.keys(
        pageIds
      ),
      options: { threshold: 0.5 },
    }
  )
  useLoadLazyAnimationClass(
    {
      elementIds: Object.keys(
        pageIds
      ),
      options: { threshold: 0.5 },
    }
  )

  const renderPages = () => {

    return pages.map(
      (
        { frontmatter, fields: { fileName } }
      ) => {

        const pageId = fileNameToComponentName(
          fileName
        )

        const Page = Pages[pageId]
        if (multiplePages && page.equalsIgnoreCase(
          pageId
        )) return null

        return Page ? (
          <Page
            key={pageId}
            {...frontmatter[toLowerCaseFirstChart(
              pageId
            )]}
          />
        ) : null

      }
    )

  }

  return (
    <div
      className='main'
    >
      <SEO
        sectionTitle={pageIds[elementsInViewPort.slice(
          -1
        )
        .pop()]}
        author={author}
        description={description}
        lang={langKey}
        title={title}
        keywords={keywords}
      />
      <Toolbar
        title={toolbar.frontmatter.toolbar.title}
        buttonLabel={toolbar.frontmatter.toolbar.buttonLabel}
        buttonOnClick={() => {

          return window.location.reload()

        }}
        langTextMap={langTextMap}
        langKey={langKey}
        defaultLang={defaultLang}
        pageIds={pageIds}
        multiplePages={multiplePages}
        elementInViewPort={elementsInViewPort.slice(
          -1
        )
        .pop()}
      />
      {renderPages()}
      {footerOrAside && <FooterOrAside />}
    </div>
  )

}

Index.propTypes = {
  data: propTypes.object.isRequired,
  pathContext: propTypes.object.isRequired,
}

export const query = graphql`
  query IndexQuery($langKey: String!) {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    ) {
      nodes {
        frontmatter {
          toolbar {
            title
            buttonLabel
          }
          home {
            title
            subTitle
            superTitle
            paragraph
            image
          }
          about {
            title
            paragraph
            iconNames
          }
        }
        fields {
          fileName
          directoryName
        }
      }
    }
  }
`

export default Index
