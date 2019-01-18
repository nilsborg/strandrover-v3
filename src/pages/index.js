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
    projects: [],
  }

  cursor = {
    x: 0,
    y: 0,
  }

  addProject = project => {
    this.setState(state => ({
      projects: [...state.projects, project],
    }))
    console.log(project.current)
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
    this.state.projects.map((projectRef, i) => {
      const project = projectRef.current
      const video = project.lastElementChild
      const videoBoundingBox = video.getBoundingClientRect()
      const shadow = video.lastElementChild

      if (this.isInViewport(videoBoundingBox)) {
        const center = {
          x: videoBoundingBox.x + videoBoundingBox.width / 2,
          y: videoBoundingBox.y + videoBoundingBox.height / 2,
        }

        const x = (center.x - this.cursor.x) / 12
        const y = (center.y - this.cursor.y) / 12

        // prettier-ignore
        // videoWrapper.style.boxShadow = `${Math.ceil(x)}px ${Math.ceil(y)}px ${Math.abs(x * y) / 40}px rgba(0,0,0,0.1)`
        shadow.style.transform = `translate3d(${x}px, ${y}px, 0px)`

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
            <Project node={node} key={index} addProject={this.addProject} />
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
