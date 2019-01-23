import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import styled from 'styled-components'

const Container = styled.div`
  margin-top: 5vh;

  p {
    max-width: 500px;
    line-height: 1.5;
  }
`

const Welcome = styled.div`
  padding: 10vw;

  h1 {
    font-weight: 300;
    color: var(--color-highlight);
    line-height: 1.3;
    /* text-transform: uppercase; */
    margin-top: 0;
    margin-bottom: 3vh;
  }
`

const Intro = styled.article`
  background-color: var(--color-offwhite);
`

const Profile = styled.div`
  padding: 10vw;

  h2 {
    font-weight: 300;
    font-size: 2em;
  }

  h3 {
    color: var(--color-highlight);
  }
`

const AboutPage = ({
  data: {
    about: { headline, intro, image, maze, nils, clientlist },
  },
}) => {
  return (
    <Layout>
      <Container>
        <Welcome>
          <h1>{headline}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: intro.childMarkdownRemark.html,
            }}
          />
        </Welcome>

        <Intro>
          <Img fluid={image.childImageSharp.fluid} />

          <Profile
            dangerouslySetInnerHTML={{
              __html: maze.childMarkdownRemark.html,
            }}
          />

          <Profile
            dangerouslySetInnerHTML={{
              __html: nils.childMarkdownRemark.html,
            }}
          />
        </Intro>

        <div
          dangerouslySetInnerHTML={{
            __html: clientlist.childMarkdownRemark.html,
          }}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPageQuery {
    about: cockpitGenericSingletonAbout {
      headline
      intro {
        childMarkdownRemark {
          html
        }
      }
      image {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze {
        childMarkdownRemark {
          html
        }
      }
      nils {
        childMarkdownRemark {
          html
        }
      }
      clientlist {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default AboutPage
