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
        <div
          dangerouslySetInnerHTML={{
            __html: intro.childMarkdownRemark.html,
          }}
        />
      </header>

      <div>
        <Img fluid={image.childImageSharp.fluid} />

        <div
          dangerouslySetInnerHTML={{
            __html: maze.childMarkdownRemark.html,
          }}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: nils.childMarkdownRemark.html,
          }}
        />
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: clientlist.childMarkdownRemark.html,
        }}
      />
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
