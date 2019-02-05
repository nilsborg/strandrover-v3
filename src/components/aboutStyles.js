import styled from 'styled-components'
import random from 'lodash/random'

export const Container = styled.div`
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

export const Welcome = styled.div`
  padding: 10vw;

  @media (min-width: 1100px) {
    padding-bottom: 10vh;
  }

  h1 {
    font-weight: 300;
    color: var(--color-secondary);
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

export const Intro = styled.article`
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

export const Profile = styled.div`
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

export const Contact = styled.address`
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

    @media (min-width: 700px) {
      font-size: 4vw;
      font-weight: 300;
    }

    @media (min-width: 2000px) {
      font-size: 77px;
    }
  }
`

export const Clientlist = styled.div`
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
