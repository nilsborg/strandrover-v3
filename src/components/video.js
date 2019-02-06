import React, { Component } from 'react'

import { isInViewport } from '../helpers'
import Shadow from './shadow'
import { Wrapper } from './videoStyles'

class Video extends Component {
  videoRef = React.createRef()

  handlePlay = () => {
    if (!this.videoRef.current) return

    const video = this.videoRef.current
    const videoCoords = video.getBoundingClientRect()

    if (isInViewport(videoCoords)) {
      if (video.paused) {
        console.log('playing video: ', video)

        video.play()
        video.dataset.canPlay = true
      }
    } else {
      if (!video.paused) {
        console.log('pausing video: ', video)

        video.pause()
      }
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

        <Shadow />
      </Wrapper>
    )
  }
}

export default Video
