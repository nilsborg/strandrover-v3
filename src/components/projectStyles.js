import styled from 'styled-components'

export const StyledProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    opacity: 0.8;
    transform: scale(0.9);
    transform-origin: center;
    transition: opacity 350ms ease-out, filter 500ms ease-out,
      transform 450ms ease-out;

    &:hover,
    &[data-active='true'] {
      opacity: 1;
      transform: scale(1);

      header {
        opacity: 1;
      }
    }
  }

  header {
    @media (max-width: 1199px) {
      margin-bottom: 7vh;
      margin-top: 3vh;
    }

    @media (min-width: 1200px) {
      transition: opacity 300ms 200ms ease-out;
      opacity: 0;
      z-index: 3;
      padding: 3vw;
      padding-left: 0;
    }

    h2 {
      font-family: var(--font-family);
      font-weight: 300;
      margin-top: 0;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 0.75vh;

      @media (min-width: 800px) {
        font-size: 40px;
      }
    }

    aside {
      margin-bottom: 1vh;
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
  font-style: italic;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (min-width: 800px) {
    font-size: 18px;
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
