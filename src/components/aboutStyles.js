import styled from 'styled-components'

export const Container = styled.div`
  padding: 7vh 5vw 0;
  overflow: hidden;

  @media (min-width: 1100px) {
    padding-top: calc(7vh + 100px + 80px - 0.8em);
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

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  .headline {
    grid-column: 1 / -1;

    h1 {
      margin: 0;
      font-weight: 300;

      @media (min-width: 1200px) {
        font-size: 3.5vw;
      }
    }
  }

  .extraImage1,
  .extraImage2 {
    position: relative;
  }

  .extraImage1 {
    @media (min-width: 1200px) {
      grid-column: 3 / 4;
      z-index: 2;
      /* margin-bottom: -60%; */
      margin-right: -100%;
    }
  }

  .extraImage2 {
    @media (min-width: 1200px) {
      grid-column: 4 / 6;
      align-self: end;
      z-index: 10;
      /* margin-top: -100%; */
      margin-left: 10%;

      figure {
        transform: translateY(-50%);
      }
    }
  }

  .introText {
    grid-column: 1 / -1;

    @media (min-width: 1200px) {
      grid-column: 1 / 3;
      grid-row-start: 2;
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

export const Profile = styled.article`
  padding: 10vw;

  @media (max-width: 1099px) {
    &:last-of-type {
      padding-top: 0;
    }
  }

  @media (min-width: 1100px) {
    padding: 4vw;
  }

  h3 {
    margin-top: 1vh;
    margin-bottom: 4vh;
  }

  nav {
    margin-top: 2vh;
    display: flex;

    a {
      margin-right: 0.3vw;
    }

    svg {
      fill: var(--color-highlight);
      display: block;
      transition: fill 250ms;
    }

    a:hover svg {
      fill: var(--color-secondary);
    }
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

export const About = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vh;

  @media (min-width: 1000px) {
    grid-gap: 5vw;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: end;
  }

  .aboutText {
    grid-column: 1 / -1;

    @media (min-width: 1200px) {
      grid-column: 1 / 4;
    }

    @media (min-width: 1400px) {
      grid-column: 1 / 3;
    }

    h2 {
      margin-bottom: 1.5em;
    }
  }

  .aboutImage1 {
    @media (min-width: 1200px) {
      grid-row-start: 1;
      grid-column: 1 / 4;
    }
  }

  .aboutImage2 {
    @media (min-width: 1200px) {
      grid-row-start: 1;
      grid-column: 4 / 6;
    }

    @media (min-width: 1400px) {
      margin-bottom: -100%;
      margin-top: 20vh;

      figure {
        transform: translate(-30%, 0);
      }
    }
  }
`

export const MapContainer = styled.div`
  height: 70vh;

  @media (min-width: 1100px) {
    margin-left: calc((7vw + 200px) * -1);
    width: calc(100% + 7vw + 200px + 5vw);
  }
`
