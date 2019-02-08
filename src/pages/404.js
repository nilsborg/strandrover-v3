import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

import SEO from '../components/seo'

const Wallpaper = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

const NotFoundPage = ({ data }) => (
  <>
    <SEO title="404: Not found" />

    <Wallpaper
      fluid={data.image.childImageSharp.fluid}
      imgStyle={{ objectFit: 'cover' }}
    />
  </>
)

export const pageQuery = graphql`
  query NotFoundPageQuery {
    image: file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NotFoundPage
