import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --radius: 5px;
    --color-primary: #364f6b;
    --color-primary-rgb: 54, 79, 107;
    --color-secondary: #3fc1c9;
    --color-offwhite: #e7ecef;
    --color-offwhiter: rgba(231, 236, 239, 0.3);
    --color-highlight: #71e8b3;
    --font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    --font-family-serif: 'IBM Plex Serif', 'Georgia', Times, serif;
    --font-family-mono:  'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono', Courier, monospace;
  }


  html, body {
    margin: 0;
  }

  body {
    font-family: var(--font-family);
    font-weight: 400;
    color: var(--color-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (prefers-color-scheme: dark) {
      background-color: var(--color-secondary)
    }
  }

  a {
    color: var(--color-highlight);
    text-decoration: none;

    span.gradient {
      transition: color 200ms ease;
      background-image: linear-gradient(
        to right,
        var(--color-highlight) 25%,
        var(--color-secondary),
        var(--color-primary)
      );
      text-decoration: none;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h1, h2, h3 {
    margin-top: 2em;
    margin-bottom: 0.5em;

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-weight: 300;
    font-size: 2.2em;

    @media (min-width: 800px) {
      font-size: 3em;
    }
  }

  h2 {
    font-weight: 300;
    font-size: 1.7em;

    @media (min-width: 800px) {
      font-size: 2em;
    }
  }

  h2, h3 {
    letter-spacing: 0.075em
  }

  h3 {
    color: var(--color-secondary);
    font-weight: 500;
  }

  p {
    margin-top: 0;
    margin-bottom: 0.7em;
  }
`

export default GlobalStyle
