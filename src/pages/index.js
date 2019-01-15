import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <ProjectList>
      {data.projects.edges.map(({ node: { id, title, video, poster } }) => (
        <li key={id}>
          <h2>{title}</h2>
          <Img fluid={poster.childImageSharp.fluid} />
          <video autoPlay muted loop playsInline src={video.publicURL} />
        </li>
      ))}
    </ProjectList>
  </Layout>
)

export const pageQuery = graphql`
  query ProjectsQuery {
    projects: allCockpitGenericCollectionProjects {
      edges {
        node {
          id
          title
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
