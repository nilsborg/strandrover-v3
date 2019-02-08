import React from 'react'
import Link from 'gatsby-plugin-transition-link'

import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 1em;
  font-size: 0.75em;
  opacity: 0.5;
  text-align: center;
  border: 1px solid coral;
  position: relative;
  padding-top: 20vh;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background-color: var(--color-secondary);
    width: 50%;
    max-width: 600px;
    transform: skewY(-45deg);
  }
`

const Header = () => (
  <StyledFooter>
    <address>
      <a href="mailto: hello@strandrover.com">
        <span className="gradient">hello@strandrover.com</span>
      </a>
    </address>

    <nav className="legal">
      <Link to="/impressum">Impressum</Link>
      <Link to="/datenschutz">Datenschutz</Link>
    </nav>

    <aside className="copyright">
      © strandrover {new Date().getFullYear()}
    </aside>
  </StyledFooter>
)

export default Header
