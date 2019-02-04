import React, { Component } from 'react'

import { Wrapper } from './videoStyles'

class Video extends Component {
  videoRef = React.createRef()

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

  handlePlay = () => {
    if (!this.videoRef.current) return

    const video = this.videoRef.current

    if (this.isInViewport(video.getBoundingClientRect())) {
      video.play()
      video.dataset.canPlay = true
    } else {
      video.pause()
    }
  }

  updateAnimation = (x, y) => {
    const translate = {
      x: 0,
      y: 0,
    }
    let distance = 0

    if (!this.videoRef.current) return { translate, distance }

    const videoBoundingBox = this.videoRef.current.getBoundingClientRect()

    if (this.isInViewport(videoBoundingBox)) {
      const center = {
        x: videoBoundingBox.x + videoBoundingBox.width / 2,
        y: videoBoundingBox.y + videoBoundingBox.height / 2,
      }

      distance = this.calcDistance(center, this.state.cursor)

      translate.x = (center.x - x) / 10
      translate.y = (center.y - y) / 10
    }

    return { translate, distance }
  }

  isInViewport = boundingBox => {
    return boundingBox.top < window.innerHeight && boundingBox.bottom > 0
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
    const { url, poster, type } = this.props

    const { translate, distance } = this.updateAnimation(
      this.state.cursor.x,
      this.state.cursor.y
    )

    let shadowStyle = {
      transform: `translate3d(${translate.x}px, ${translate.y}px, 0px)`,
    }

    if (!this.isFirefox()) {
      shadowStyle.filter = `blur(${distance / 50}px)`
    } else {
      shadowStyle.opacity = 1.0 - Math.min(1, distance / 1000.0)
    }

    this.handlePlay()

    return (
      <Wrapper className={`type--${type.toLowerCase()}`}>
        <div className="mask">
          <video
            ref={this.videoRef}
            muted
            loop
            playsInline
            src={url}
            onLoadedData={this.handlePlay}
            onCanPlay={this.handlePlay}
            onCanPlayThrough={this.handlePlay}
          />
          <img src={poster.childImageSharp.fluid.base64} alt="placeholder" />
        </div>

        <div className="shadow" style={shadowStyle} />
      </Wrapper>
    )
  }
}

export default Video
