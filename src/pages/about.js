import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import posed from 'react-pose'

import {
  Container,
  Welcome,
  Intro,
  Profile,
  Contact,
  Clientlist,
} from '../components/aboutStyles'

const PosedContainer = posed(Container)({
  visible: { staggerChildren: 50 },
  invisible: { staggerChildren: 50 },
})

const Poser = posed.div({
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' },
  },
  invisible: {
    opacity: 0,
    x: -250,
    transition: { type: 'spring' },
  },
})

class AboutPage extends Component {
  state = {
    isVisible: false,
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  render() {
    const {
      headline,
      intro,
      image,
      maze,
      nils,
      clientlist,
    } = this.props.data.about

    return (
      <PosedContainer pose={this.state.isVisible ? 'visible' : 'invisible'}>
        <Welcome>
          <Poser>
            <h1>{headline}</h1>
          </Poser>

          <Poser
            dangerouslySetInnerHTML={{
              __html: intro.childMarkdownRemark.html,
            }}
          />
        </Welcome>

        <Poser>
          <Intro>
            <Poser className="bannerWrap">
              <Img className="banner" fluid={image.childImageSharp.fluid} />
            </Poser>

            <Profile
              className="maze"
              dangerouslySetInnerHTML={{
                __html: maze.childMarkdownRemark.html,
              }}
            />

            <Profile
              className="nils"
              dangerouslySetInnerHTML={{
                __html: nils.childMarkdownRemark.html,
              }}
            />
          </Intro>
        </Poser>

        <Poser>
          <Contact>
            <span>
              {[
                'Say hi',
                'Drop us a line',
                'Hola',
                'Waaatttuuuppp',
                'Greetings Earthling',
                '👋',
              ].map((greeting, index) => (
                <span key={index}>{greeting}</span>
              ))}
            </span>
            <a href="mailto: hello@strandrover.com">hello@strandrover.com</a>
          </Contact>
        </Poser>

        <Poser>
          <Clientlist
            dangerouslySetInnerHTML={{
              __html: clientlist.childMarkdownRemark.html,
            }}
          />
        </Poser>
      </PosedContainer>
    )
  }
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
