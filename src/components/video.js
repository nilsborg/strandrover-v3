import React, { Component } from 'react'

import { isInViewport } from '../helpers'
import Shadow from './shadow'
import { Wrapper } from './videoStyles'

class Video extends Component {
  videoRef = React.createRef()

  handlePlay = () => {
    if (!this.videoRef.current) return

    const video = this.videoRef.current

    if (isInViewport(video.getBoundingClientRect())) {
      video.play()
      video.dataset.canPlay = true
    } else {
      video.pause()
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePlay)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePlay)
  }

  render() {
    const { url, poster, type } = this.props

    return (
      <Wrapper
        className={`${this.props.className} type--${type.toLowerCase()}`}
      >
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

        <Shadow />
      </Wrapper>
    )
  }
}

export default Video
