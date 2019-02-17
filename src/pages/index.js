import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { TransitionState } from 'gatsby-plugin-transition-link'

import styled from 'styled-components'
import posed from 'react-pose'

import Project from '../components/project'
import Footer from '../components/footer'

const ProjectList = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-top: 0;
  padding: 7vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (min-width: 450px) and (max-width: 999px) {
    padding: 10vh 10vw;
  }

  @media (min-width: 1100px) {
    padding-left: calc(7vw + 200px);
    padding-top: calc(7vh + 100px + 80px - 0.6em);
  }
`

const PosedProjectList = posed(ProjectList)({
  visible: { staggerChildren: 50 },
  invisible: { staggerChildren: 150 },
})

const ProjectWrap = styled.li`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 25vh;

    @media (min-width: 1100px) {
      margin-bottom: 40vh;
    }
  }
`

class IndexPage extends Component {
  render() {
    const data = this.props.data

    return (
      <TransitionState>
        {({ transitionStatus: status }) => {
          return (
            <>
              <PosedProjectList
                pose={
                  ['entering', 'entered'].includes(status)
                    ? 'visible'
                    : 'invisible'
                }
              >
                {data.projects.edges.map(({ node }, index) => (
                  <ProjectWrap key={index}>
                    <Project
                      node={node}
                      key={index}
                      index={index}
                      total={data.projects.edges.length}
                      status={status}
                    />
                  </ProjectWrap>
                ))}
              </PosedProjectList>
              <Footer />
            </>
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
