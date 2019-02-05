import React, { Component } from 'react'

import Video from '../components/video'
import LinkIcon from '../assets/images/link.svg'
import { StyledProject, ViewProject, Tag } from './projectStyles'

import { isInViewport } from '../helpers'

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

const Poser = posed.div(posePrefs)

class Project extends Component {
  descriptionRef = React.createRef()

  state = {
    scrollY: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollState)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollState)
  }

  updateScrollState = () => {
    this.setState({
      scrollY: window.scrollY,
    })
  }

  calcParallax = ref => {
    let translateY = 0

    if (!ref.current) return translateY

    const elBoundingBox = ref.current.getBoundingClientRect()

    if (isInViewport(elBoundingBox)) {
      console.log('in viewport')

      translateY = (elBoundingBox.y - this.state.scrollY) / 10
    }

    return translateY
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

    const descriptionTranslateY = this.calcParallax(this.descriptionRef)

    return (
      <StyledProject
        className={`type--${type.toLowerCase()} index--${this.props.index}`}
      >
        <Poser>
          <header className="header">
            <h2>{title}</h2>

            <aside>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag.content}</Tag>
              ))}
            </aside>
          </header>
        </Poser>

        {description && (
          <Poser>
            <p
              className="description"
              ref={this.descriptionRef}
              style={{
                transform: `translate3d(0px, ${descriptionTranslateY}px, 0px)`,
              }}
            >
              {description}
            </p>
          </Poser>
        )}

        <Poser>
          <Video
            className="video"
            type={type}
            url={video.publicURL}
            poster={poster}
          />
        </Poser>

        {quote && (
          <blockquote className="testimonial">
            <p>{quote}</p>
            <span>{quoteMeta}</span>
          </blockquote>
        )}

        <Poser>
          <ViewProject
            className="link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon />
            <span>{link}</span>
          </ViewProject>
        </Poser>
      </StyledProject>
    )
  }
}

export default Project
