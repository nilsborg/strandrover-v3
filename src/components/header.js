import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-plugin-transition-link'
import Img from 'gatsby-image'

import styled from 'styled-components'

import LogoPath from '../assets/images/logo.svg'
import { StyledHeader, Stripe } from './headerStyles'

const Logo = ({ className, onLoad }) => (
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
            critical={true}
            onLoad={onLoad}
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
  handleLogoLoad = () => {
    // i know, i know … don't touch the DOM... but there's no other way
    // on page load, when react isnt yet loaded
    document.querySelector('#main-header').dataset.loaded = true
  }

  render() {
    return (
      <StyledHeader id="main-header">
        <LogoLink
          to="/"
          exit={{
            length: 0.6,
          }}
          entry={{
            delay: 0.5,
          }}
        >
          <Logo onLoad={this.handleLogoLoad} className="logo" />
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
