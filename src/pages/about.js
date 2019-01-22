import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const AboutPage = ({
  data: {
    about: { headline, intro, image, maze, nils, clientlist },
  },
}) => {
  return (
    <Layout>
      <header>
        <h1>{headline}</h1>
        {intro.content}
      </header>

      <div>
        <Img fluid={image.childImageSharp.fluid} />

        <div>{maze.content}</div>

        <div>{nils.content}</div>
      </div>

      <div>{clientlist.content}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPageQuery {
    about: cockpitGenericSingletonAbout {
      headline
      intro {
        content
      }
      image {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze {
        content
      }
      nils {
        content
      }
      clientlist {
        content
      }
    }
  }
`

export default AboutPage
