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
          <nav>
            <Link
              to="/"
              activeClassName="active"
              exit={{
                length: 0.6,
              }}
              entry={{
                delay: 0.5,
              }}
            >
              <span className="gradient">projects</span>
            </Link>

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
            {/* <Link
              to="/monkey"
              exit={{
                length: 0.6,
              }}
              entry={{
                delay: 0.5,
              }}
            >
              <span className="monkey">monkey</span>
            </Link> */}
          </nav>

          <span className="claim">branding, design, code</span>
        </Stripe>
      </StyledHeader>
    )
  }
}

export default Header
