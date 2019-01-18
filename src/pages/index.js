import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import throttle from 'lodash/throttle'

import Layout from '../components/layout'
import Project from '../components/project'

const ProjectList = styled.ul`
  list-style: none;
  /* padding-left: 0; */
  margin-left: 0;
  padding: 5vw;
  overflow: hidden;

  @media (min-width: 1110px) {
    padding-left: calc(7vw + 200px);
  }
`

class IndexPage extends Component {
  boxRef = React.createRef()
  state = {
    videos: [],
  }

  cursor = {
    x: 0,
    y: 0,
  }

  addVideo = video => {
    this.setState(state => ({
      videos: [...state.videos, video],
    }))
  }

  handleMouseMove = event => {
    this.cursor.x = event.clientX
    this.cursor.y = event.clientY

    this.updateShadow()
  }

  handleScroll = () => {
    this.updateShadow()
  }

  updateShadow = () => {
    this.state.videos.map((video, i) => {
      const videoRect = video.current.getBoundingClientRect()

      if (this.isInViewport(videoRect)) {
        const center = {
          x: videoRect.x + videoRect.width / 2,
          y: videoRect.y + videoRect.height / 2,
        }

        const videoWrapper = video.current.parentElement
        const project = video.current.parentElement.parentElement

        const x = (center.x - this.cursor.x) / 12
        const y = (center.y - this.cursor.y) / 12

        console.log(i, video.current, x, y)

        // prettier-ignore
        videoWrapper.style.boxShadow = `${Math.ceil(x)}px ${Math.ceil(y)}px ${Math.abs(x * y) / 40}px rgba(0,0,0,0.1)`
        // prettier-ignore
        project.style.transform = `translate3d(${x * -0.5}px, ${y * -0.5}px, 0px)`
      }

      return null
    })
  }

  isInViewport = boundingBox => {
    return boundingBox.top < window.innerHeight && boundingBox.bottom > 0
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 1000 / 60))

    window.addEventListener(
      'mousemove',
      throttle(this.handleMouseMove, 1000 / 60)
    )
  }

  render() {
    const data = this.props.data

    return (
      <Layout>
        <ProjectList>
          {data.projects.edges.map(({ node }, index) => (
            <Project node={node} key={index} addVideo={this.addVideo} />
          ))}
        </ProjectList>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query ProjectsQuery {
    projects: allCockpitGenericCollectionProjects {
      edges {
        node {
          id
          title
          tags {
            content
          }
          link
          poster {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          video {
            id
            publicURL
          }
        }
      }
    }
  }
`

export default IndexPage
