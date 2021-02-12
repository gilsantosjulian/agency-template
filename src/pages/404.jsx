import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '../components/atoms/SEO'
import SuperTitle from '../components/atoms/SuperTitle'
import Paragraph from '../components/atoms/Paragraph'
import '../theme/main.scss'

export default () => {

  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "404/notFound.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div
      className='notFound'
    >
      <SEO
        title='404: Not found'
      />
      <Image
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <SuperTitle
        label='Not Found'
      />
      <Paragraph
        label='The view does not exists.'
      />
    </div>
  )

}
