import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import LogoPath from '../assets/images/logo.svg'

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
        image: file(relativePath: { eq: "wallpapers/DSC08409.jpg" }) {
          ...imageShit
        }
      }
    `}
    render={data => {
      return (
        <>
          <LogoPath />
          <Img
            className={className}
            alt="strandrover logo"
            fixed={data.image.childImageSharp.fixed}
          />
        </>
      )
    }}
  />
)

const Logo = styled(Image)`
  img {
    clip-path: url(#logoPath);
  }
`

const StyledHeader = styled.header`
  @media (max-width: 1099px) {
    display: flex;
    justify-content: center;
    padding: 5vw;
    padding-bottom: 0;
  }

  @media (min-width: 1100px) {
    position: fixed;
    z-index: 10;
    top: 7vh;
    left: 7vw;
  }
`

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Logo />
    </Link>

    <nav>
      <Link to="/about">About</Link>
    </nav>
  </StyledHeader>
)

export default Header
