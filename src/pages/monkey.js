import React, { Component } from 'react'
import { TransitionState } from 'gatsby-plugin-transition-link'

import { navigate } from 'gatsby'

import styled from 'styled-components'
import posed from 'react-pose'

import Shadow from '../components/shadow'

const Monkey = styled.div`
  padding: 5vw;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #011723;

  figure {
    margin: 0;
    position: relative;
  }

  img {
    border-radius: var(--radius);
    max-width: 100%;
    position: relative;
    z-index: 10;
  }
`

const PosedMonkey = posed(Monkey)({
  visible: {
    opacity: 1,
  },
  invisible: {
    opacity: 0,
  },
})

class MonkeyPage extends Component {
  componentDidMount() {
    console.log('🐒')

    setTimeout(() => {
      navigate('/')
    }, 4000)
  }

  render() {
    return (
      <TransitionState>
        {({ transitionStatus: status }) => {
          return (
            <div>
              <PosedMonkey
                pose={
                  ['entering', 'entered'].includes(status)
                    ? 'visible'
                    : 'invisible'
                }
              >
                <figure>
                  <img
                    src="/laptop-monkey.gif"
                    alt="Monkey with and then without Laptop"
                  />
                  <Shadow />
                </figure>
              </PosedMonkey>
            </div>
          )
        }}
      </TransitionState>
    )
  }
}

export default MonkeyPage
