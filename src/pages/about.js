import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import random from 'lodash/random'
import { TransitionState } from 'gatsby-plugin-transition-link'

import styled from 'styled-components'
import posed from 'react-pose'

const Container = styled.div`
  @media (max-width: 1099px) {
    margin-top: 5vh;
  }

  @media (min-width: 1100px) {
    padding-left: calc(7vw + 200px);
    padding-right: 7vw;
  }

  p {
    max-width: 35em;
    line-height: 1.8;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Welcome = styled.div`
  padding: 10vw;

  @media (min-width: 1100px) {
    padding-bottom: 10vh;
  }

  h1 {
    font-weight: 300;
    color: var(--color-highlight);
    line-height: 1.3;
    /* text-transform: uppercase; */
    margin-top: 0;
    margin-bottom: 3vh;
  }

  p {
    @media (min-width: 1110px) {
      font-size: 1.3em;
    }

    &:last-child {
      font-size: 2em;
    }
  }
`

const Intro = styled.article`
  @media (max-width: 1099px) {
    background-color: var(--color-offwhite);
  }

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 5vh;
      right: -3vw;
      bottom: 8vh;
      left: -10vw;
      background-color: var(--color-offwhite);
      border-radius: calc(2 * var(--radius));
      opacity: 0.3;
    }

    .bannerWrap {
      grid-column: 1/3;
    }

    .banner {
      box-shadow: 0 0.4vh 0.5vh rgba(0, 0, 0, 0.1),
        0 3vh 7vh rgba(0, 0, 0, 0.05);
      border-radius: var(--radius);
    }
  }
`

const Profile = styled.div`
  padding: 10vw;

  @media (max-width: 1099px) {
    &:last-of-type {
      padding-top: 0;
    }
  }

  @media (min-width: 1100px) {
    padding: 4vw;

    &.maze {
      padding-top: ${random(4, 8)}vh;
    }

    &.nils {
      padding-top: ${random(6, 11)}vh;
    }
  }

  h3 {
    margin-top: 1vh;
    margin-bottom: 4vh;
  }
`

const Contact = styled.address`
  padding: 10vw;
  font-style: normal;
  font-weight: 300;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3vh;

  @media (min-width: 1110px) {
    text-align: center;
  }

  span:not(:last-of-type):after {
    content: '/';
    padding: 0 0.7em;
    opacity: 0.4;
    color: var(--color-secondary);
  }

  a {
    font-size: 7vw;
    color: var(--color-highlight);
    background-image: linear-gradient(
      to right,
      var(--color-highlight) 40%,
      var(--color-primary),
      var(--color-secondary)
    );
    text-decoration: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 700px) {
      font-size: 4vw;
      font-weight: 300;
    }

    @media (min-width: 2000px) {
      font-size: 77px;
    }
  }
`

const Clientlist = styled.div`
  padding: 10vw;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;

    h2 {
      grid-column: 1 / 3;
      margin-bottom: 5vh;
    }

    h3 {
      margin-top: 0;
      display: flex;
      align-items: center;

      &:after {
        content: '';
        height: 1px;
        background-color: var(--color-offwhite);
        flex: 1;
        margin: 0 1vw;
      }
    }
  }

  @media (min-width: 1100px) {
    padding: 4vw;
    margin-top: 5vh;
  }

  ul {
    list-style: none;
    padding-left: 0;

    @media (min-width: 700px) {
      margin-top: 0.24em;
      margin-bottom: 5vh;
    }

    li {
      margin: 1vh 0;

      @media (min-width: 700px) {
        margin-top: 0;
        margin-bottom: 1.5vh;
      }
    }
  }
`

const PoserContainer = posed(Container)({
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

const AboutPage = ({
  data: {
    about: { headline, intro, image, maze, nils, clientlist },
  },
}) => {
  return (
    <TransitionState>
      {({ transitionStatus: status }) => {
        return (
          <PoserContainer
            pose={
              ['entering', 'entered'].includes(status) ? 'visible' : 'invisible'
            }
          >
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
                <a href="mailto: hello@strandrover.com">
                  hello@strandrover.com
                </a>
              </Contact>
            </Poser>

            <Poser>
              <Clientlist
                dangerouslySetInnerHTML={{
                  __html: clientlist.childMarkdownRemark.html,
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
