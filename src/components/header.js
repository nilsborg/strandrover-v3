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
          fixed(width: 141, height: 139, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      query {
        image0: file(relativePath: { eq: "wallpapers/DSC07590.jpg" }) {
          ...imageShit
        }
        image1: file(relativePath: { eq: "wallpapers/DSC08409.jpg" }) {
          ...imageShit
        }
        image2: file(relativePath: { eq: "wallpapers/IMG_4067.jpg" }) {
          ...imageShit
        }
        image3: file(relativePath: { eq: "wallpapers/IMG_4602.jpg" }) {
          ...imageShit
        }
        image4: file(relativePath: { eq: "wallpapers/IMG_4637.jpg" }) {
          ...imageShit
        }
        image5: file(relativePath: { eq: "wallpapers/IMG_5941.jpg" }) {
          ...imageShit
        }
      }
    `}
    render={data => {
      const images = Object.values(data).map(image => (
        <>
          <LogoPath />
          <Img className={className} fixed={image.childImageSharp.fixed} />
        </>
      ))

      return images[Math.floor(Math.random() * 6)]
    }}
  />
)

const Logo = styled(Image)`
  img {
    clip-path: url(#logoPath);
  }
`

const StyledHeader = styled.header`
  @media (max-width: 799px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 800px) {
    position: fixed;
    z-index: 10;
    top: 10vh;
    left: 10vw;
  }
`

const Header = ({ data }) => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
)

export default Header
