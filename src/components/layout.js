import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
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
