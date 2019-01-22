import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import throttle from 'lodash/throttle'

import Layout from '../components/layout'
import Project from '../components/project'

const ProjectList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding: 5vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1110px) {
    padding-left: calc(7vw + 200px);
    align-items: flex-start;
  }
`

class IndexPage extends Component {
  projects = []

  cursor = {
    x: 0,
    y: 0,
  }

  addProject = project => {
    this.projects.push(project)
    console.log(this.projects)
  }

  handleMouseMove = event => {
    this.cursor.x = event.clientX
    this.cursor.y = event.clientY

    this.updateAnimation()
  }

  handleScroll = () => {
    this.updateAnimation()
  }

  updateAnimation = () => {
    this.projects.map(projectRef => {
      const project = projectRef.current
      const videoWrap = project.firstElementChild
      const videoBoundingBox = videoWrap.getBoundingClientRect()
      const shadow = videoWrap.lastElementChild
      const video = videoWrap.firstElementChild.firstElementChild

      if (this.isInViewport(videoBoundingBox) && window.innerWidth > 850) {
        const center = {
          x: videoBoundingBox.x + videoBoundingBox.width / 2,
          y: videoBoundingBox.y + videoBoundingBox.height / 2,
        }

        const distance = this.calcDistance(center, this.cursor)

        const x = (center.x - this.cursor.x) / 10
        const y = (center.y - this.cursor.y) / 10

        shadow.style.transform = `translate3d(${x}px, ${y}px, 0px)`
        // shadow.style.opacity = 100 / distance
        shadow.style.filter = `blur(${distance / 50}px)`

        if (video) video.play()

        // if (distance < 600) {
        //   video.style.transform = `translate3d(${x * -1}px, ${y * -1}px, 0px)`
        // } else {
        //   video.style.transform = `translate3d(0,0,0)`
        // }
      } else {
        if (video) video.pause()
      }

      return null
    })
  }

  isInViewport = boundingBox => {
    return boundingBox.top < window.innerHeight && boundingBox.bottom > 0
  }

  calcDistance = (coord1, coord2) => {
    const a = coord1.x - coord2.x
    const b = coord1.y - coord2.y

    const distance = Math.sqrt(a * a + b * b)

    return distance
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
            <Project
              node={node}
              key={index}
              addProject={this.addProject}
              index={index}
            />
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
