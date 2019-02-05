import React, { Component } from 'react'

import Video from '../components/video'
import LinkIcon from '../assets/images/link.svg'
import { StyledProject, ViewProject, Tag } from './projectStyles'

import styled from 'styled-components'
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
const PosedDesc = posed.div(posePrefs)
const PosedVideoWrap = posed.div(posePrefs)
const PosedTestimonial = posed.blockquote(posePrefs)
const PosedViewProject = posed(ViewProject)(posePrefs)

const Parallaxer = styled.div`
  will-change: transform;
`

class Project extends Component {
  projectRef = React.createRef()

  state = {
    scrollY: 0,
    offsetTop: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollState)

    const projectListStyle = window.getComputedStyle(
      this.projectRef.current.parentElement.parentElement
    )
    const projectListTopPadding = parseInt(
      projectListStyle.getPropertyValue('padding-top').replace('px', '')
    )

    this.setState({
      offsetTop: this.projectRef.current.offsetTop - projectListTopPadding,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollState)
  }

  updateScrollState = () => {
    this.setState({
      scrollY: window.scrollY,
    })
  }

  calcParallax = (factor, direction = 'speedUp') => {
    const translateY = (this.state.offsetTop - this.state.scrollY) / factor

    return direction === 'slowDown' ? translateY * -1 : translateY
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

    const headerY = this.calcParallax(9, 'slowDown')
    const descY = this.calcParallax(10, 'slowDown')
    const testimonialY = this.calcParallax(8, 'slowDown')

    return (
      <StyledProject
        className={`type--${type.toLowerCase()} index--${this.props.index}`}
        ref={this.projectRef}
      >
        <PosedHeader className="header">
          <Parallaxer
            style={{
              transform: `translate3d(0px, ${headerY}px, 0px)`,
            }}
          >
            <h2>{title}</h2>

            <aside>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag.content}</Tag>
              ))}
            </aside>
          </Parallaxer>
        </PosedHeader>

        {description && (
          <PosedDesc className="description">
            <Parallaxer
              style={{
                transform: `translate3d(0px, ${descY}px, 0px)`,
              }}
            >
              {description}
            </Parallaxer>
          </PosedDesc>
        )}

        <PosedVideoWrap className="video">
          <Video type={type} url={video.publicURL} poster={poster} />
        </PosedVideoWrap>

        {quote && (
          <PosedTestimonial className="testimonial">
            <Parallaxer
              style={{
                transform: `translate3d(0px, ${testimonialY}px, 0px)`,
              }}
            >
              <p>{quote}</p>
              <span>{quoteMeta}</span>
            </Parallaxer>
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
