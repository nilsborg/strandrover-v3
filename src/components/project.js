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

  header {
    @media (max-width: 1199px) {
      margin-bottom: 3vh;
    }

    @media (min-width: 1200px) {
      position: absolute;
      left: -5vw;
      bottom: 3vh;
      z-index: 3;
      padding: 1vw;
      padding-right: 3vw;
      border-radius: var(--radius);
      background-color: rgba(255, 255, 255, 0.35);
      backdrop-filter: saturate(180%) blur(5px);
      /* mix-blend-mode: difference; */
    }

    h2 {
      font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
      font-weight: 300;
      margin-top: 0;

      @media (min-width: 800px) {
        font-size: 60px;
      }
    }

    h2,
    aside {
      margin-bottom: 2vh;
    }

    a {
      font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono', Courier, monospace;
      display: flex;
      align-items: center;
      text-decoration: none;
      font-style: italic;

      @media (min-width: 800px) {
        font-size: 22px;
      }
    }

    svg {
      fill: #cacbc1;
      margin-right: 0.5em;
    }
  }
`

const Tag = styled.span`
  display: inline-block;
  background-color: var(--color-secondary);
  color: var(--color-offwhite);
  padding: 3px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 0.5vw;
`

class Project extends Component {
  render() {
    const { title, tags, link, video, poster } = this.props.node

    return (
      <StyledProject
        style={{
          '--space-bottom': `${random(20, 40)}vh`,
          '--space-left': `${random(0, 30)}vw`,
        }}
      >
        <header>
          <h2>{title}</h2>

          <aside>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag.content}</Tag>
            ))}
          </aside>

          <a href={link} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
            <span>{link}</span>
          </a>
        </header>

        <Video
          url={video.publicURL}
          poster={poster}
          addVideo={this.props.addVideo}
        />
      </StyledProject>
    )
  }
}

export default Project
