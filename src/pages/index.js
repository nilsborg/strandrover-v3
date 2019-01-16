import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import Video from '../components/video'

const ProjectList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
`

const Tag = styled.span`
  display: inline-block;
  background-color: coral;
  padding: 3px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 0.5vw;
`

const IndexPage = ({ data }) => (
  <Layout>
    <ProjectList>
      {data.projects.edges.map(
        ({ node: { id, title, tags, link, video, poster } }) => (
          <li key={id}>
            <div>
              <h2>{title}</h2>

              <div>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag.content}</Tag>
                ))}
              </div>

              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </div>

            <Video url={video.publicURL} />
          </li>
        )
      )}
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
