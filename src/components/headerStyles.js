import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  @media (max-width: 1099px) {
    justify-content: space-around;
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

  /* Animate in! */

  .logo,
  span,
  nav {
    opacity: 0;
  }

  &.loaded {
    .logo {
      animation: ${fadeIn} 600ms 300ms ease-out forwards;
    }

    span {
      animation: ${fadeIn} 600ms 600ms ease-out forwards;
    }

    nav {
      animation: ${fadeIn} 600ms 900ms ease-out forwards;
    }
  }
`
export const Stripe = styled.div`
  letter-spacing: 0.075em;
  font-weight: 400;

  @media (min-width: 700px) {
    display: flex;
  }

  @media (min-width: 1100px) {
    writing-mode: vertical-lr;
    margin-left: -15px;
    margin-top: 5vh;
    letter-spacing: 0.1em;

    @media (min-height: 800px) {
      margin-top: 15vh;
    }
  }

  span  {
    @media (max-width: 699px) {
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
    @media (min-width: 700px) {
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
          /* margin-right: 0.3em; */
        }
      }
    }

    a  {
      text-decoration: none;
      color: var(--color-highlight);

      &.active {
        color: var(--color-primary);
        text-decoration: underline;
        pointer-events: none;
      }

      @media (min-width: 1100px) {
        transform: rotate(180deg);
      }
    }
  }
`
