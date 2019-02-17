import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { TransitionState } from 'gatsby-plugin-transition-link'

import posed from 'react-pose'

import ShadowImage from '../components/shadowImage'
import Map from '../components/map'
import Footer from '../components/footer'
import LinkedInIcon from '../assets/images/linkedin.svg'
import TwitterIcon from '../assets/images/twitter.svg'

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

class AboutPage extends Component {
  state = {
    largeScreen: false,
  }

  componentDidMount() {
    if (window && window.innerWidth >= 1100) {
      this.setState({
        largeScreen: true,
      })
    }
  }

  render() {
    const {
      headline,
      intro,
      image,
      image1,
      image2,
      maze,
      nils,
      clientlist,
      about,
      aboutImage1,
      aboutImage2,
    } = this.props.data.about

    const markers = [
      {
        longitude: 8.76244,
        latitude: 50.098903,
        name: 'Nils',
      },
      {
        longitude: 13.424494,
        latitude: 52.467192,
        name: 'Mathias',
      },
    ]

    const mapCenter = {
      longitude: 11.291,
      latitude: 51.666,
    }

    const { largeScreen } = this.state

    return (
      <TransitionState>
        {({ transitionStatus: status }) => {
          return (
            <>
              <PoserContainer
                pose={
                  ['entering', 'entered'].includes(status)
                    ? 'visible'
                    : 'invisible'
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

                    <Profile className="maze">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: maze.childMarkdownRemark.html,
                        }}
                      />

                      <nav>
                        <a
                          href="https://www.linkedin.com/in/mathiasmortag/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedInIcon />
                        </a>
                      </nav>
                    </Profile>

                    <Profile className="nils">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: nils.childMarkdownRemark.html,
                        }}
                      />
                      <nav>
                        <a
                          href="https://www.linkedin.com/in/nilsborg/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedInIcon />
                        </a>
                        <a
                          href="https://twitter.com/nilsborgboehmer"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TwitterIcon />
                        </a>
                      </nav>
                    </Profile>
                  </Intro>
                </Poser>

                {largeScreen && (
                  <PosedMapContainer>
                    <Map markers={markers} center={mapCenter} />
                  </PosedMapContainer>
                )}

                <Poser>
                  <Clientlist
                    dangerouslySetInnerHTML={{
                      __html: clientlist.childMarkdownRemark.html,
                    }}
                  />
                </Poser>

                <About>
                  <Poser className="aboutText">
                    <article
                      dangerouslySetInnerHTML={{
                        __html: about.childMarkdownRemark.html,
                      }}
                    />
                  </Poser>

                  <Poser className="aboutImage1">
                    <ShadowImage image={aboutImage1} />
                  </Poser>

                  <Poser className="aboutImage2">
                    <ShadowImage image={aboutImage2} />
                  </Poser>
                </About>
              </PoserContainer>
              <Footer />
            </>
          )
        }}
      </TransitionState>
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
      aboutImage1 {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutImage2 {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default AboutPage
