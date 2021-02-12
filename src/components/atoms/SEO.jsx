import React from 'react'
import Helmet from 'react-helmet'
import propTypes from 'prop-types'

const SEO = (
  {
    title, description, author, lang, sectionTitle, meta, keywords,
  }
) => {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={sectionTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: `keywords`,
          content: keywords.join(
            `, `
          ),
        },
      ].concat(
        meta
      )}
    />
  )

}

SEO.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  lang: propTypes.string.isRequired,
  sectionTitle: propTypes.string,
  meta: propTypes.array,
  keywords: propTypes.array,
}

SEO.defaultProps = {
  meta: [],
  keywords: [],
  sectionTitle: '',
}

export default SEO
