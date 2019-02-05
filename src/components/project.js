import React, { Component } from 'react'
import Img from 'gatsby-image'

import Video from '../components/video'
import LinkIcon from '../assets/images/link.svg'
import Shadow from './shadow'

import {
  StyledProject,
  ViewProject,
  Tag,
  ExtraImageWrapper,
} from './projectStyles'

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

const ExtraImage = ({ className, image }) => {
  return (
    <ExtraImageWrapper className={className}>
      <figure>
        <Img fluid={image.childImageSharp.fluid} />
        <Shadow />
      </figure>
    </ExtraImageWrapper>
  )
}

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
      image1,
      image2,
    } = this.props.node

    // const headerY = this.calcParallax(9, 'slowDown')
    // const descY = this.calcParallax(10, 'slowDown')
    // const testimonialY = this.calcParallax(8, 'slowDown')
    const headerY = 0
    const descY = 0
    const testimonialY = 0

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

        {image1 && <ExtraImage className="extraImage1" image={image1} />}

        {image2 && <ExtraImage className="extraImage2" image={image2} />}

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
          <span className="gradient">{link}</span>
        </PosedViewProject>
      </StyledProject>
    )
  }
}

export default Project
