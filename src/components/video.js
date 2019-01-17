import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: var(--color-offwhite);
  position: relative;
  padding-bottom: 60.5%;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 3vh 3vh rgba(0, 0, 0, 0.2);

  @media (min-width: 850px) {
    width: 720px;
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
    /* opacity: 0; */
  }

  video[data-can-play='true'] {
    opacity: 1;
  }
`

class Video extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = { playing: false }
  }

  componentDidMount() {
    const video = this.myRef.current
    console.log('video ref', this.myRef)
    console.log('video ref', video)
    console.log('video ref', video.readyState)
    if (!this.state.playing && video.readyState > 3) video.play()
  }

  handleCanPlay = event => {
    console.log('canPlay', event)
    event.currentTarget.play()
  }
  handlePlay = event => {
    console.log('play', event)
    this.setState({ playing: true })
  }

  handleLoadingEvent = event => console.log('loadingEvent', event.type, event)

  render() {
    const url = this.props.url
    const poster = this.props.poster

    return (
      <Wrapper>
        <video
          ref={this.myRef}
          muted
          loop
          playsInline
          src={url}
          onLoadStart={this.handleLoadingEvent}
          onLoadedMetadata={this.handleLoadingEvent}
          onLoadedData={this.handleLoadingEvent}
          onCanPlayThrough={this.handleLoadingEvent}
          onCanPlay={this.handleCanPlay}
          onPlay={this.handlePlay}
        />
        <img src={poster.childImageSharp.fluid.base64} alt="placeholder" />
      </Wrapper>
    )
  }
}

export default Video
