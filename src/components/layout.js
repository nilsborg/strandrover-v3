import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'

import styled from 'styled-components'
import GlobalStyle from './globalStyle'

import Header from './header'

const Main = styled.main`
  padding: 5vw;

  @media (min-width: 1110px) {
    padding-left: calc(7vw + 200px);
  }
`

const Layout = ({ children }) => (
  <Main>
    <SEO />
    <GlobalStyle />
    <Header />
    {children}
    <footer>© strandrover {new Date().getFullYear()}</footer>
  </Main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
