import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import posed from 'react-pose'
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

  handleClick = event => {
    console.log(event, window.scrollY)
  }

  render() {
    return (
      <PosedHeader pose={this.state.isVisible ? 'visible' : 'invisible'}>
        <LogoLink to="/" onClick={this.handleClick}>
          <Logo />
        </LogoLink>

        <Stripe>
          <PosedSpan>concept, branding, design, code</PosedSpan>
          <PosedNav>
            <Link
              to="/about"
              activeClassName="active"
              onClick={this.handleClick}
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
