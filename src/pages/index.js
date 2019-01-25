import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { TransitionState } from 'gatsby-plugin-transition-link'

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

const PosedProjectList = posed(ProjectList)({
  visible: { staggerChildren: 250 },
  invisible: { staggerChildren: 200 },
})

const PosedProjectWrap = posed.div({
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
})

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
                <PosedProjectWrap key={index}>
                  <Project node={node} key={index} index={index} />
                </PosedProjectWrap>
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
