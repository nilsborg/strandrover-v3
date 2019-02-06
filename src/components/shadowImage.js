import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Shadow from './shadow'

const ImageWrapper = styled.figure`
  margin: 0;
  position: relative;

  .gatsby-image-wrapper {
    z-index: 2;
    border-radius: var(--radius);
  }
`

const ShadowImage = ({ className, image }) => {
  return (
    <ImageWrapper className={className}>
      <Img fluid={image.childImageSharp.fluid} />
      <Shadow />
    </ImageWrapper>
  )
}

export default ShadowImage
