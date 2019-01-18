import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: var(--color-offwhite);
  position: relative;
  width: 720px;

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
    background-color: rgba(0, 0, 0, 0.2);
    transform: translate(10px, 10px);
  }
`

class Video extends Component {
  videoRef = React.createRef()

  componentDidMount() {
    const video = this.videoRef.current
    video.play()
    video.dataset.canPlay = true
  }

  handlePlay = event => {
    // console.log(event.type, event.currentTarget, event)
    event.currentTarget.play()
    event.currentTarget.dataset.canPlay = true
  }

  render() {
    const url = this.props.url
    const poster = this.props.poster

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

        <div className="shadow" />
      </Wrapper>
    )
  }
}

export default Video
