import React, { Component } from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'
import posed from 'react-pose'

import Project from '../components/project'

const ProjectList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding: 5vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    padding-left: calc(7vw + 200px);
    align-items: flex-start;
  }
`

const PosedProjectWrap = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' },
  },
  exit: {
    opacity: 0,
    x: 250,
    transition: { type: 'spring' },
  },
})

class IndexPage extends Component {
  state = {
    isVisible: false,
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  render() {
    const data = this.props.data

    return (
      <ProjectList>
        {data.projects.edges.map(({ node }, index) => (
          <PosedProjectWrap key={index}>
            <Project node={node} key={index} index={index} />
          </PosedProjectWrap>
        ))}
      </ProjectList>
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
