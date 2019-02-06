import styled from 'styled-components'

export const StyledProject = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5vh;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 5vw;
    align-items: start;

    &.rtl {
      direction: rtl;
    }
  }

  &.ltr:after {
    content: '';
    position: absolute;
    top: -5vh;
    left: -5vw;
    right: -5vw;
    bottom: -5vh;
    background-color: var(--color-offwhiter);
    z-index: -1;
    transform: skewY(-40deg);

    @media (min-width: 450px) and (max-width: 999px) {
      left: -10vw;
      right: -10vw;
    }

    @media (min-width: 1100px) {
      left: calc((7vw + 200px) * -1);
    }
  }

  .header,
  .description,
  .video,
  .extraImage1,
  .extraImage2,
  .testimonial,
  .link {
    position: relative;
  }

  .header,
  .description,
  .testimonial,
  .link {
    direction: ltr; /* to counter the rtl on every second project */
  }

  .header {
    @media (min-width: 1000px) {
      grid-column: 1 / -1;
    }

    @media (min-width: 1200px) {
      transition: opacity 300ms 200ms ease-out;
      z-index: 3;
    }

    h2 {
      font-family: var(--font-family);
      font-weight: 300;
      margin-top: 0;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 0.75vh;

      @media (min-width: 500px) {
        font-size: 40px;
        line-height: 1;
      }

      @media (min-width: 1000px) {
        font-size: 60px;
        margin-bottom: 3vh;
      }
    }

    aside {
      @media (max-width: 1099px) {
        margin-bottom: 1vh;
      }
    }
  }

  .description {
    line-height: 1.8;

    @media (max-width: 999px) {
      margin-bottom: 3vh;
    }

    @media (min-width: 1000px) {
      grid-column: 1 / 3;
    }
  }

  .video {
    z-index: 10;

    @media (min-width: 1000px) {
      grid-column: 3 / -1;
    }
  }

  .extraImage1 {
    @media (min-width: 1000px) {
      grid-column: 1 / 4;
      margin-top: -30%;
    }
  }

  .extraImage2 {
    @media (min-width: 1000px) {
      grid-column: 4 / 7;
      margin-top: 20%;
    }
  }

  .testimonial {
    margin: 0;
    z-index: 11;
    mix-blend-mode: hard-light;

    @media (min-width: 1000px) {
      grid-column: 3 / -1;
    }

    p  {
      font-family: var(--font-family-serif);
      font-weight: 300;
      font-style: italic;
      line-height: 1.6;

      @media (min-width: 500px) {
        font-size: 20px;
      }

      @media (min-width: 1100px) {
        font-size: 36px;
      }
    }

    span {
      @media (max-width: 500px) {
        font-size: 11px;
      }
    }
  }

  .link {
    @media (min-width: 1000px) {
      grid-column: 1 / -1;
    }
  }
`

export const ViewProject = styled.a`
  @keyframes fly {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(100%);
      opacity: 1;
    }
    51% {
      transform: translate(100%);
      opacity: 0;
    }
    52% {
      transform: translate(-100%);
      opacity: 0;
    }
    53% {
      transform: translate(-100%);
      opacity: 1;
    }
    100% {
      transform: translate(0);
    }
  }

  font-family: var(--font-family-mono);
  font-weight: 300;
  font-style: normal;
  /* text-decoration: none; */
  display: flex;
  align-items: center;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1000px) {
    font-size: 30px;
  }

  svg {
    fill: var(--color-highlight);
    margin-right: 0.5em;

    @media (max-width: 600px) {
      display: none;
    }
  }

  &:hover svg path {
    animation: fly 650ms ease-in-out infinite;
  }
`

export const ExtraImageWrapper = styled.div`
  figure {
    margin: 0;
    position: relative;

    .gatsby-image-wrapper {
      z-index: 2;
      border-radius: var(--radius);
    }
  }
`

export const Tag = styled.span`
  display: inline-block;
  color: var(--color-primary);
  padding: 3px 10px;
  border-radius: 3px;
  border: 2px solid var(--color-offwhite);
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 0.5vw;
`
