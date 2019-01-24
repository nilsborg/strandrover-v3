import React from 'react'

import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 1em;
  font-size: 0.75em;
  opacity: 0.5;
  text-align: center;
`

const Header = () => (
  <StyledFooter>© strandrover {new Date().getFullYear()}</StyledFooter>
)

export default Header
