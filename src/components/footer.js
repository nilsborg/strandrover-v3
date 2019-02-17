import React from 'react'
import Link from 'gatsby-plugin-transition-link'

import styled from 'styled-components'

const StyledFooter = styled.footer`
  /* border: 1px solid coral; */
  position: relative;
  padding: 7vh 5vw 2vh;
  overflow: hidden;

  background: url('/triangle.svg') no-repeat;
  background-position: right center;

  @media (min-width: 1100px) {
    padding-top: calc(7vh + 100px + 80px - 0.8em);
    padding-left: calc(7vw + 200px);
  }

  address {
    font-style: normal;
    display: flex;

    @media (min-width: 600px) {
      display: flex;
      justify-content: flex-end;
    }
  }

  .hello  {
    mix-blend-mode: screen;
    font-size: 30px;
    margin-bottom: 1em;

    @media (min-width: 800px) {
      font-size: 60px;
      font-weight: 300;
    }
  }

  .smallText {
    mix-blend-mode: color-dodge;

    @media (min-width: 600px) {
      display: flex;
      justify-content: flex-end;
    }

    a {
      margin-right: 1em;
    }
  }

  .legal {
    display: flex;
    flex-wrap: wrap;
  }
`

const Header = () => (
  <StyledFooter>
    <address>
      <a className="hello" href="mailto: hello@strandrover.com">
        <span className="gradient">hello@strandrover.com</span>
      </a>
    </address>

    <div className="smallText">
      <nav className="legal">
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
        <Link
          to="/monkey"
          exit={{
            length: 0.6,
          }}
          entry={{
            delay: 0.5,
          }}
        >
          <span className="monkey">Monkey!</span>
        </Link>
      </nav>

      <aside className="copyright">
        © strandrover {new Date().getFullYear()}
      </aside>
    </div>
  </StyledFooter>
)

export default Header
