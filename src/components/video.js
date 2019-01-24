import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  @media (min-width: 850px) {
    width: 720px;
  }

  .mask  {
    border-radius: var(--radius);
    overflow: hidden;
    position: relative;
    z-index: 2;
    padding-bottom: 60.5%;

    @media (min-width: 850px) {
      padding-bottom: 450px;
    }

    img {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(10px);
    }

    video {
      transition: opacity 500ms ease-in;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
    }

    video[data-can-play='true'] {
      opacity: 1;
    }
  }

  .shadow {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: var(--radius);
  }
`

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
    let blur = 0

    if (!this.videoRef.current) return { translate, blur }

    const videoBoundingBox = this.videoRef.current.getBoundingClientRect()

    if (this.isInViewport(videoBoundingBox)) {
      const center = {
        x: videoBoundingBox.x + videoBoundingBox.width / 2,
        y: videoBoundingBox.y + videoBoundingBox.height / 2,
      }

      blur = this.calcDistance(center, this.state.cursor)

      translate.x = (center.x - x) / 10
      translate.y = (center.y - y) / 10
    }

    return { translate, blur }
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

  render() {
    const url = this.props.url
    const poster = this.props.poster

    const { translate, blur } = this.updateAnimation(
      this.state.cursor.x,
      this.state.cursor.y
    )

    this.handlePlay()

    return (
      <Wrapper>
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

        <div
          className="shadow"
          style={{
            transform: `translate3d(${translate.x}px, ${translate.y}px, 0px)`,
            filter: `blur(${blur / 50}px)`,
          }}
        />
      </Wrapper>
    )
  }
}

export default Video
