import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  @media (max-width: 1099px) {
    padding: 5vw;
    padding-bottom: 0;
  }

  @media (min-width: 1100px) {
    flex-direction: column;
    position: fixed;
    z-index: 10;
    top: 7vh;
    left: 7vw;
  }

  .logo {
    width: 50px;
    height: 50px;
    fill: url(#svg-gradient) var(--color-secondary);

    @media (max-width: 1099px) {
      margin-right: 4vw;
    }

    @media (min-width: 800px) {
      width: 80px;
      height: 80px;
    }

    svg {
      display: block;
    }
  }

  /* Animate in! */
  .logo {
    animation: ${fadeIn} 600ms 300ms ease-out backwards;
  }

  span {
    animation: ${fadeIn} 600ms 600ms ease-out backwards;
  }

  nav {
    animation: ${fadeIn} 600ms 900ms ease-out backwards;
  }
`
export const Stripe = styled.div`
  letter-spacing: 0.075em;
  font-weight: 400;

  @media (min-width: 500px) {
    display: flex;
  }

  @media (min-width: 1100px) {
    writing-mode: vertical-lr;
    margin-left: -15px;
    margin-top: 100px;
    letter-spacing: 0.1em;
  }

  .claim {
    @media (max-width: 499px) {
      display: none;
    }

    @media (min-width: 1100px) and (max-height: 640px) {
      display: none;
    }

    @media (min-width: 1100px) {
      transform: rotate(180deg);
    }
  }

  nav {
    @media (min-width: 500px) {
      display: flex;
      align-items: center;

      &:before {
        content: '';
        background-color: var(--color-offwhite);
        display: block;
        width: 3em;
        height: 1px;
        margin: 0 1vw;

        @media (min-width: 1100px) {
          width: 1px;
          height: 3em;
          margin: 1vw 0;
        }
      }
    }

    a {
      text-decoration: none;
      color: var(--color-highlight);
      padding: 0 0.3em;
      transition: opacity 250ms, filter 250ms;

      span.gradient {
        background-image: linear-gradient(
          to bottom,
          var(--color-highlight),
          var(--color-secondary)
        );
      }

      &.active {
        color: var(--color-primary);
        /* text-decoration: underline; */
        pointer-events: none;
        opacity: 0.4;
        filter: saturate(0);
      }

      @media (min-width: 1100px) {
        transform: rotate(180deg);
        padding: 0.4em 0;
      }
    }
  }
`
