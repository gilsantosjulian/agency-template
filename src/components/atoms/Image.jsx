import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
  query ImageQuery {
    images: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

const Image = (
  { imageName }
) => {

  const getImageByName = (
    data
  ) => {

    return data.images.edges.find(
      (
        edge
      ) => {

        return edge.node.relativePath.includes(
          imageName
        )

      }
    )

  }

  const renderImage = (
    data
  ) => {

    const image = getImageByName(
      data
    )

    if (!image) return null

    const imageSizes = image.node.childImageSharp.sizes
    return (
      <Img
        className='image'
        sizes={imageSizes}
      />
    )

  }

  return (
    <StaticQuery
      query={query}
      render={renderImage}
    />
  )

}

Image.propTypes = {
  imageName: PropTypes.string.isRequired,
}

export default Image
