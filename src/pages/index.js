import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

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

  handleScroll = event => {
    this.updateShadow()
  }

  updateShadow = () => {
    this.state.videos.map(video => {
      const videoRect = video.current.getBoundingClientRect()

      const center = {
        x: videoRect.x + videoRect.width / 2,
        y: videoRect.y + videoRect.height / 2,
      }

      let shadowX = (center.x - this.cursor.x) / 12
      let shadowY = (center.y - this.cursor.y) / 12

      video.current.parentElement.style.boxShadow = `${Math.ceil(
        shadowX
      )}px ${Math.ceil(shadowY)}px ${Math.abs(shadowX * shadowY) /
        40}px rgba(0,0,0,0.1)`

      video.current.parentElement.parentElement.style.transform = `translate(${shadowX *
        -1}px, ${shadowY * -1}px)`
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    setTimeout(() => {
      this.updateShadow()
    }, 300)
  }

  render() {
    const data = this.props.data

    return (
      <Layout>
        <ProjectList onMouseMove={this.handleMouseMove}>
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
