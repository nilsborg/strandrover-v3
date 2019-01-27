import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-plugin-transition-link'
import Img from 'gatsby-image'

import styled from 'styled-components'

import LogoPath from '../assets/images/logo.svg'
import { StyledHeader, Stripe } from './headerStyles'

const Logo = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "wallpapers/DSC08409.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 141, maxHeight: 141, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Img
            className={className}
            alt="strandrover logo"
            fluid={data.image.childImageSharp.fluid}
          />
          <LogoPath />
        </>
      )
    }}
  />
)

// Logo
const LogoLink = styled(Link)`
  @media (max-width: 699px) {
    width: 70px;
    height: 70px;

    #logoPath {
      transform: scale(0.5);
    }
  }

  @media (min-width: 700px) {
    width: 141px;
    height: 139px;
  }

  img {
    clip-path: url(#logoPath);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

class Header extends Component {
  state = {
    isVisible: false,
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  render() {
    return (
      <StyledHeader pose={this.state.isVisible ? 'visible' : 'invisible'}>
        <LogoLink
          to="/"
          exit={{
            length: 0.6,
          }}
          entry={{
            delay: 0.5,
          }}
        >
          <Logo />
        </LogoLink>

        <Stripe>
          <span>concept, branding, design, code</span>
          <nav>
            <Link
              to="/about"
              activeClassName="active"
              exit={{
                length: 0.6,
              }}
              entry={{
                delay: 0.2,
              }}
            >
              about
            </Link>
          </nav>
        </Stripe>
      </StyledHeader>
    )
  }
}

export default Header
