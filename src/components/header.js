import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-plugin-transition-link'
import Img from 'gatsby-image'

import styled from 'styled-components'
import posed from 'react-pose'

import LogoPath from '../assets/images/logo.svg'

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

/**
 * Styling
 */

// Header
const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  @media (max-width: 1099px) {
    justify-content: space-around;
    padding: 5vw;
    padding-bottom: 0;
  }

  @media (min-width: 1100px) {
    flex-direction: column;
    position: fixed;
    z-index: 10;
    top: 7vh;
    left: 7vw;
  }
`

// turned styled header into an animated header with pose :)
const PosedHeader = posed(StyledHeader)({
  visible: {
    opacity: 1,
    delay: 600,
    beforeChildren: true,
    staggerChildren: 300,
  },
  invisible: { opacity: 0 },
})

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

const fadeInProps = {
  visible: { opacity: 1 },
  invisible: { opacity: 0 },
}

// Stripe
const Stripe = styled.div`
  letter-spacing: 0.075em;
  font-weight: 300;

  span  {
    opacity: 0.6;

    @media (max-width: 699px) {
      display: none;
    }

    @media (min-width: 1110px) and (max-height: 640px) {
      display: none;
    }
  }

  @media (min-width: 700px) {
    display: flex;
  }

  @media (min-width: 1100px) {
    writing-mode: vertical-rl;
    margin-left: -15px;
    margin-top: 5vh;
    letter-spacing: 0.1em;

    @media (min-height: 800px) {
      margin-top: 15vh;
    }
  }

  nav {
    @media (min-width: 700px) {
      display: flex;
      align-items: center;

      &:before {
        content: '';
        background-color: var(--color-offwhite);
        display: block;
        width: 3em;
        height: 1px;
        margin: 0 1vw;

        @media (min-width: 1100px) {
          width: 1px;
          height: 3em;
          margin: 1vw 0;
          margin-right: 0.3 em;
        }
      }
    }

    a  {
      text-decoration: none;
      color: var(--color-highlight);

      &.active {
        color: var(--color-primary);
        text-decoration: underline;
        pointer-events: none;
      }
    }
  }
`

const PosedSpan = posed.span(fadeInProps)

const PosedNav = posed.nav({
  visible: { opacity: 1 },
  invisible: { opacity: 0 },
  pressable: true,
  init: { scaleY: 1 },
  press: { scaleY: 1.2 },
})

class Header extends Component {
  state = {
    isVisible: false,
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  render() {
    return (
      <PosedHeader pose={this.state.isVisible ? 'visible' : 'invisible'}>
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
          <PosedSpan>concept, branding, design, code</PosedSpan>
          <PosedNav>
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
          </PosedNav>
        </Stripe>
      </PosedHeader>
    )
  }
}

export default Header
