import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import GlobalStyle from './globalStyle'

import Header from './header'
// import Footer from './footer'

const Layout = ({ children }) => (
  <main>
    <SEO />
    <GlobalStyle />
    <Header />
    {children}
    {/* <Footer /> */}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
