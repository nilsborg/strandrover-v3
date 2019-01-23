import React, { Component } from 'react'
import styled from 'styled-components'
import random from 'lodash/random'

import Video from '../components/video'
import LinkIcon from '../assets/images/link.svg'

const StyledProject = styled.li`
  position: relative;
  margin-bottom: calc(var(--space-bottom) / 2);

  @media (min-width: 1100px) {
    margin-bottom: var(--space-bottom);
    margin-left: var(--space-left);
  }

  @media (min-width: 1200px) {
    /* filter: grayscale(100%); */
    opacity: 0.8;
    transform: scale(0.8);
    transform-origin: center;
    transition: opacity 350ms ease-out, filter 500ms ease-out,
      transform 450ms ease-out;

    &:hover,
    &[data-active='true'] {
      /* filter: grayscale(0%); */
      opacity: 1;
      transform: scale(1);

      header {
        opacity: 1;
      }
    }
  }

  header {
    @media (max-width: 1199px) {
      margin-bottom: 7vh;
      margin-top: 3vh;
    }

    @media (min-width: 1200px) {
      transition: opacity 300ms 200ms ease-out;
      opacity: 0;
      z-index: 3;
      padding: 3vw;
    }

    h2 {
      font-family: var(--font-family);
      font-weight: 300;
      margin-top: 0;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 0.75vh;

      @media (min-width: 800px) {
        font-size: 40px;
      }
    }

    aside {
      margin-bottom: 1vh;
    }
  }
`

const ViewProject = styled.a`
  @keyframes fly {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(100%);
      opacity: 1;
    }
    51% {
      transform: translate(100%);
      opacity: 0;
    }
    52% {
      transform: translate(-100%);
      opacity: 0;
    }
    53% {
      transform: translate(-100%);
      opacity: 1;
    }
    100% {
      transform: translate(0);
    }
  }

  font-family: var(--font-family-mono);
  font-style: italic;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  svg {
    fill: var(--color-highlight);
    margin-right: 0.5em;
  }

  &:hover svg path {
    animation: fly 650ms ease-in-out infinite;
  }
`

const Tag = styled.span`
  display: inline-block;
  color: var(--color-primary);
  padding: 3px 10px;
  border-radius: 3px;
  border: 2px solid var(--color-offwhite);
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 0.5vw;
`

class Project extends Component {
  projectRef = React.createRef()

  state = {
    margin: {
      bottom: random(3, 8),
      left: random(0, 30),
    },
  }

  handleMouseLeave = () => {
    const project = this.projectRef.current

    if (this.props.index === 0 && project.dataset.active === 'true') {
      project.dataset.active = false
    }
  }

  render() {
    const { title, tags, link, video, poster } = this.props.node

    return (
      <StyledProject
        ref={this.projectRef}
        data-active={this.props.index === 0 ? true : false}
        onMouseLeave={this.handleMouseLeave}
        style={{
          '--space-bottom': `${this.state.margin.bottom}vh`,
          '--space-left': `${this.state.margin.left}vw`,
        }}
      >
        <Video
          url={video.publicURL}
          poster={poster}
          cursor={this.props.cursor}
        />

        <header>
          <h2>{title}</h2>

          <aside>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag.content}</Tag>
            ))}
          </aside>

          <ViewProject href={link} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
            <span>{link}</span>
          </ViewProject>
        </header>
      </StyledProject>
    )
  }
}

export default Project
