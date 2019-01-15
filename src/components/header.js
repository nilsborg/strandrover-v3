import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import LogoPath from '../images/logo.svg'

const Image = ({ className }) => (
  <StaticQuery
    query={graphql`
      fragment imageShit on File {
        childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
      }
      query {
        image0: file(relativePath: { eq: "wallpapers/DSC07590.jpg" }) { ...imageShit }
        image1: file(relativePath: { eq: "wallpapers/DSC08409.jpg" }) { ...imageShit }
        image2: file(relativePath: { eq: "wallpapers/IMG_4067.jpg" }) { ...imageShit }
        image3: file(relativePath: { eq: "wallpapers/IMG_4602.jpg" }) { ...imageShit }
        image4: file(relativePath: { eq: "wallpapers/IMG_4637.jpg" }) { ...imageShit }
        image5: file(relativePath: { eq: "wallpapers/IMG_5941.jpg" }) { ...imageShit }
      }
    `}
    render={data => (
      <Img
        className={className}
        fixed={data[`image${Math.ceil(Math.random() * 3)}`].childImageSharp.fixed}
      />
    )}
  />
)

const Logo = styled(Image)`
  img {
    clip-path: url(#logoPath);
  }
`

const StyledHeader = styled.header`
  position: fixed;
  top: 10vh;
  left: 10vw;
`

const Header = ({ data }) => (
  <StyledHeader>
    <LogoPath />
    <Logo />
  </StyledHeader>
)

export default Header
