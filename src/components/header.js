import React, { Component } from 'react'
import Link from 'gatsby-plugin-transition-link'

import Logo from '../assets/images/logo.svg'
import { StyledHeader, Stripe } from './headerStyles'

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Link
          className="logo"
          to="/"
          exit={{
            length: 0.6,
          }}
          entry={{
            delay: 0.5,
          }}
        >
          <Logo />
        </Link>

        <Stripe>
          <span className="claim">branding, design, code</span>
          <nav>
            <Link
              to="/about"
              activeClassName="active"
              exit={{
                length: 0.6,
              }}
              entry={{
                delay: 0.5,
              }}
            >
              <span className="gradient">about</span>
            </Link>
          </nav>
        </Stripe>
      </StyledHeader>
    )
  }
}

export default Header
