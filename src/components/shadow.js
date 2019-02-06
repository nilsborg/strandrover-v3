import React, { Component } from 'react'
import { isInViewport } from '../helpers'
import styled from 'styled-components'

const StyledShadow = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--color-primary-rgb), 0.2);
  border-radius: var(--radius);
  will-change: transform, opacity;
`

class Shadow extends Component {
  shadowRef = React.createRef()

  state = {
    cursor: {
      x: 0,
      y: 0,
    },
    scrollY: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollState)
    window.addEventListener('mousemove', this.updateCursorState)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollState)
    window.removeEventListener('mousemove', this.updateCursorState)
  }

  updateCursorState = event => {
    this.setState({
      cursor: {
        x: event.clientX,
        y: event.clientY,
      },
    })
  }

  updateScrollState = () => {
    this.setState({
      scrollY: window.scrollY,
    })
  }

  updateAnimation = (x, y) => {
    const translate = {
      x: 0,
      y: 0,
    }
    let distance = 0

    if (!this.shadowRef.current) return { translate, distance }

    const shadowBoundingBox = this.shadowRef.current.getBoundingClientRect()

    if (isInViewport(shadowBoundingBox)) {
      const center = {
        x: shadowBoundingBox.x + shadowBoundingBox.width / 2,
        y: shadowBoundingBox.y + shadowBoundingBox.height / 2,
      }

      distance = this.calcDistance(center, this.state.cursor)

      translate.x = (center.x - x) / 10
      translate.y = (center.y - y) / 10
    }

    return { translate, distance }
  }

  calcDistance = (coord1, coord2) => {
    const a = coord1.x - coord2.x
    const b = coord1.y - coord2.y

    const distance = Math.sqrt(a * a + b * b)

    return distance
  }

  isFirefox = () => {
    if (typeof window === 'undefined') return
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  }

  render() {
    const { translate, distance } = this.updateAnimation(
      this.state.cursor.x,
      this.state.cursor.y
    )

    return (
      <StyledShadow
        ref={this.shadowRef}
        style={{
          transform: `translate3d(${translate.x}px, ${translate.y}px, 0px)`,
          opacity: 1.0 - Math.min(1, distance / 1000.0),
        }}
      />
    )
  }
}

export default Shadow
