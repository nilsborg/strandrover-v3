import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import LinkIcon from '../assets/images/link.svg'

import Layout from '../components/layout'

import Video from '../components/video'

const ProjectList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
`

const Project = styled.li`
  position: relative;

  header {
    @media (min-width: 1200px) {
      position: absolute;
      left: -5vw;
      bottom: 3vh;
      z-index: 2;
      padding: 1vw;
      padding-right: 3vw;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: var(--radius);
    }

    h2 {
      font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
      font-weight: 300;
      margin-top: 0;

      @media (min-width: 800px) {
        font-size: 60px;
      }
    }

    h2,
    aside {
      margin-bottom: 2vh;
    }

    a {
      font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono', Courier, monospace;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: coral;

      @media (min-width: 800px) {
        font-size: 22px;
      }
    }

    svg {
      fill: #cacbc1;
      margin-right: 0.5em;
    }
  }
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
          <Project key={id}>
            <header>
              <h2>{title}</h2>

              <aside>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag.content}</Tag>
                ))}
              </aside>

              <a href={link} target="_blank" rel="noopener noreferrer">
                <LinkIcon />
                <span>{link}</span>
              </a>
            </header>

            <Video url={video.publicURL} />
          </Project>
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
