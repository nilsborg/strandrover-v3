import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import GlobalStyle from './globalStyle'

import '../assets/fonts.css'

import Header from './header'

const Layout = ({ children }) => (
  <main>
    <SEO />
    <GlobalStyle />
    <Header />
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
