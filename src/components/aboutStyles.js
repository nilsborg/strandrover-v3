import styled from 'styled-components'
import random from 'lodash/random'

export const Container = styled.div`
  padding: 7vh 5vw;
  overflow: hidden;

  @media (min-width: 1100px) {
    padding-top: calc(7vh + 100px + 80px - 0.6em);
    padding-left: calc(7vw + 200px);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vh;

  @media (min-width: 1000px) {
    grid-gap: 5vw;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  .headline {
    grid-column: 1 / -1;

    h1 {
      font-weight: 300;
      color: var(--color-secondary);
      line-height: 1.3;
      text-transform: uppercase;
      margin: 0;
    }
  }

  .extraImage1,
  .extraImage2 {
    position: relative;
  }

  .extraImage1 {
    @media (min-width: 1100px) {
      grid-column: 1 / 4;
      z-index: 2;
    }
  }

  .extraImage2 {
    @media (min-width: 1100px) {
      grid-column: 4 / 6;
      align-self: end;
      margin-left: -10vw;
      margin-bottom: -20vh;
      z-index: 1;
    }
  }

  .introText {
    grid-column: 1 / -1;

    @media (min-width: 1100px) {
      grid-column: 1 / 3;
    }

    p {
      @media (min-width: 1110px) {
        font-size: 1.2em;
      }

      &:last-child {
        font-size: 2em;
      }
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

    .bannerWrap {
      grid-column: 1/3;
    }

    .banner {
      border-radius: var(--radius);
      margin-left: calc((7vw + 170px) * -1);
      width: calc(100% + 7vw + 170px + 5vw - 30px);
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

    &.nils {
      padding-top: 10vh;
    }
  }

  h3 {
    margin-top: 1vh;
    margin-bottom: 4vh;
  }
`

export const Contact = styled.address`
  padding: 10vw 0;
  font-style: normal;
  font-weight: 300;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3vh;

  /* @media (min-width: 1110px) {
    text-align: center;
  } */

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
