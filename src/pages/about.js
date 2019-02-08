import React from 'react'
import { graphql } from 'gatsby'
import { TransitionState } from 'gatsby-plugin-transition-link'

import posed from 'react-pose'

import ShadowImage from '../components/shadowImage'
import Map from '../components/map'

import {
  Container,
  Welcome,
  Intro,
  Profile,
  Contact,
  Clientlist,
  About,
  MapContainer,
} from '../components/aboutStyles'

const PoserContainer = posed(Container)({
  visible: { staggerChildren: 50 },
  invisible: { staggerChildren: 50 },
})

const poserPrefs = {
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
}

const Poser = posed.div(poserPrefs)

const PosedMapContainer = posed(MapContainer)(poserPrefs)

const AboutPage = ({
  data: {
    about: {
      headline,
      intro,
      image,
      image1,
      image2,
      maze,
      nils,
      clientlist,
      about,
    },
  },
}) => {
  return (
    <TransitionState>
      {({ transitionStatus: status }) => {
        const markers = [
          {
            longitude: 8.76244,
            latitude: 50.098903,
          },
          {
            longitude: 13.424494,
            latitude: 52.467192,
          },
        ]

        const mapCenter = {
          longitude: 11.291,
          latitude: 51.666,
        }

        return (
          <PoserContainer
            pose={
              ['entering', 'entered'].includes(status) ? 'visible' : 'invisible'
            }
          >
            <Welcome>
              <Poser className="headline">
                <h1 dangerouslySetInnerHTML={{ __html: headline }} />
              </Poser>

              <Poser className="extraImage1">
                <ShadowImage image={image1} />
              </Poser>

              <Poser className="extraImage2">
                <ShadowImage image={image2} />
              </Poser>

              <Poser
                className="introText"
                dangerouslySetInnerHTML={{
                  __html: intro.childMarkdownRemark.html,
                }}
              />
            </Welcome>

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
                <a href="mailto: hello@strandrover.com">
                  <span className="gradient">hello@strandrover.com</span>
                </a>
              </Contact>
            </Poser>

            <Poser>
              <Intro>
                <Poser className="bannerWrap">
                  <ShadowImage className="banner" image={image} />
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

            <PosedMapContainer>
              <Map markers={markers} center={mapCenter} />
            </PosedMapContainer>

            <Poser>
              <Clientlist
                dangerouslySetInnerHTML={{
                  __html: clientlist.childMarkdownRemark.html,
                }}
              />
            </Poser>

            <Poser>
              <About
                dangerouslySetInnerHTML={{
                  __html: about.childMarkdownRemark.html,
                }}
              />
            </Poser>
          </PoserContainer>
        )
      }}
    </TransitionState>
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
      image1 {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2 {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
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
      about {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default AboutPage
