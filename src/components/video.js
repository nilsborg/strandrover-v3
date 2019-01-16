import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: coral;
  position: relative;
  padding-bottom: 60.5%;
  border-radius: 1vw;
  overflow: hidden;
  box-shadow: 0 3vh 3vh rgba(0, 0, 0, 0.2);

  @media (min-width: 750px) {
    width: 750px;
    padding-bottom: 454px;
  }

  video {
    transition: opacity 500ms ease-in;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
  }

  video[data-can-play='true'] {
    opacity: 1;
  }
`

class Video extends Component {
  handleVideoPlay = event => {
    console.log('playing: ', event.currentTarget)
    event.currentTarget.dataset.canPlay = true
  }

  render() {
    const url = this.props.url

    return (
      <Wrapper>
        <video
          autoPlay
          muted
          loop
          playsInline
          src={url}
          onCanPlay={this.handleVideoPlay}
        />
      </Wrapper>
    )
  }
}

export default Video
