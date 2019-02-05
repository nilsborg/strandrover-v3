import React, { Component } from 'react'

import Video from '../components/video'
import LinkIcon from '../assets/images/link.svg'
import { StyledProject, ViewProject, Tag } from './projectStyles'

import posed from 'react-pose'

const posePrefs = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' },
  },
  invisible: {
    opacity: 0,
    x: 250,
    transition: { type: 'spring' },
  },
}

const PosedHeader = posed.header(posePrefs)
const PosedDesc = posed.p(posePrefs)
const PosedVideoWrap = posed.div(posePrefs)
const PosedTestimonial = posed.blockquote(posePrefs)
const PosedViewProject = posed(ViewProject)(posePrefs)

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
        <PosedHeader className="header">
          <h2>{title}</h2>

          <aside>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag.content}</Tag>
            ))}
          </aside>
        </PosedHeader>

        {description && (
          <PosedDesc className="description">{description}</PosedDesc>
        )}

        <PosedVideoWrap>
          <Video
            className="video"
            type={type}
            url={video.publicURL}
            poster={poster}
          />
        </PosedVideoWrap>

        {quote && (
          <PosedTestimonial className="testimonial">
            <p>{quote}</p>
            <span>{quoteMeta}</span>
          </PosedTestimonial>
        )}

        <PosedViewProject
          className="link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon />
          <span>{link}</span>
        </PosedViewProject>
      </StyledProject>
    )
  }
}

export default Project
