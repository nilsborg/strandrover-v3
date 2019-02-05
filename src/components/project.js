import React, { Component } from 'react'

import Video from '../components/video'
import LinkIcon from '../assets/images/link.svg'
import { StyledProject, ViewProject, Tag } from './projectStyles'

class Project extends Component {
  projectRef = React.createRef()

  handleMouseLeave = () => {
    const project = this.projectRef.current

    if (this.props.index === 0 && project.dataset.active === 'true') {
      project.dataset.active = false
    }
  }

  render() {
    const {
      title,
      description,
      quote,
      quoteMeta,
      type,
      tags,
      link,
      video,
      poster,
    } = this.props.node

    return (
      <StyledProject
        ref={this.projectRef}
        data-active={this.props.index === 0 ? true : false}
        onMouseLeave={this.handleMouseLeave}
        className={`type--${type.toLowerCase()}`}
      >
        <header>
          <h2>{title}</h2>

          <aside>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag.content}</Tag>
            ))}
          </aside>
        </header>

        {description && <p className="description">{description}</p>}

        <Video type={type} url={video.publicURL} poster={poster} />

        {quote && (
          <blockquote>
            <p>{quote}</p>
            <span>{quoteMeta}</span>
          </blockquote>
        )}

        <ViewProject href={link} target="_blank" rel="noopener noreferrer">
          <LinkIcon />
          <span>{link}</span>
        </ViewProject>
      </StyledProject>
    )
  }
}

export default Project
