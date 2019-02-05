import styled from 'styled-components'

export const StyledProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 5vw;
  }

  @media (min-width: 1200px) {
    /* opacity: 0.8;
    transform: scale(0.97); */
    transform-origin: center;
    transition: opacity 350ms ease-out, filter 500ms ease-out,
      transform 450ms ease-out;

    /* &:hover,
    &[data-active='true'] {
      opacity: 1;
      transform: scale(1);

      header {
        opacity: 1;
      }
    } */
  }

  header {
    @media (min-width: 1100px) {
      grid-column: 1 / 3;
    }

    @media (max-width: 1199px) {
      margin-bottom: 7vh;
      margin-top: 3vh;
    }

    @media (min-width: 1200px) {
      transition: opacity 300ms 200ms ease-out;
      /* opacity: 0; */
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

      @media (min-width: 1100px) {
        font-size: 60px;
        margin-bottom: 3vh;
      }

      /* @media (min-width: 800px) {
        font-size: 40px;
      } */
    }

    aside {
      margin-bottom: 1vh;

      @media (min-width: 1100px) {
        margin-bottom: 3vh;
      }
    }
  }

  .description {
    line-height: 1.8;
  }

  blockquote {
    margin: 0;

    @media (min-width: 1100px) {
      grid-column: 2 / 3;
    }

    p  {
      font-family: var(--font-family-serif);
      font-weight: 300;
      line-height: 1.6;

      @media (min-width: 500px) {
        font-size: 20px;
      }

      @media (min-width: 1100px) {
        font-size: 36px;
      }
    }
  }

  a {
    @media (min-width: 1100px) {
      grid-column: 1 / 3;
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
  /* font-style: italic; */
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1100px) {
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
