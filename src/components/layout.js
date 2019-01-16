import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import styled, { createGlobalStyle } from 'styled-components'
import Header from './header'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: cursive;
  }
`

const Main = styled.main`
  padding: 5vw;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Main>
          <GlobalStyle />
          <Header data={data} />
          {children}
          <footer>© strandrover {new Date().getFullYear()}</footer>
        </Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
