import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { TransitionState } from 'gatsby-plugin-transition-link'

import styled from 'styled-components'
import posed from 'react-pose'

import Project from '../components/project'

const ProjectList = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-top: 0;
  padding: 5vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    padding-left: calc(7vw + 200px);
    padding-top: calc(7vh + 100px + 80px - 0.6em);
  }
`

const PosedProjectList = posed(ProjectList)({
  visible: { staggerChildren: 250 },
  invisible: { staggerChildren: 200 },
})

const ProjectWrap = styled.li`
  margin-bottom: 5vh;
  width: 100%;

  @media (min-width: 1100px) {
    margin-bottom: 40vh;
  }
`

class IndexPage extends Component {
  render() {
    const data = this.props.data

    return (
      <TransitionState>
        {({ transitionStatus: status }) => {
          return (
            <PosedProjectList
              pose={
                ['entering', 'entered'].includes(status)
                  ? 'visible'
                  : 'invisible'
              }
            >
              {data.projects.edges.map(({ node }, index) => (
                <ProjectWrap key={index}>
                  <Project node={node} key={index} index={index} />
                </ProjectWrap>
              ))}
            </PosedProjectList>
          )
        }}
      </TransitionState>
    )
  }
}

export const pageQuery = graphql`
  query ProjectsQuery {
    projects: allCockpitGenericCollectionProjects {
      edges {
        node {
          id
          type
          title
          description
          tags {
            content
          }
          quote
          quoteMeta
          link
          poster {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image1 {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxWidth: 1000) {
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
