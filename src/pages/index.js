import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

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

  @media (min-width: 1100px) {
    padding-left: calc(7vw + 200px);
    align-items: flex-start;
  }
`

class IndexPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <ProjectList>
          {data.projects.edges.map(({ node }, index) => (
            <Project node={node} key={index} index={index} />
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
