import { createGlobalStyle } from 'styled-components'

import IBMPlexMono from '../assets/fonts/IBMPlexMono-LightItalic-Latin1.woff2'
import IBMPlexSansLight from '../assets/fonts/IBMPlexSans-Light-Latin1.woff2'
import IBMPlexSansMedium from '../assets/fonts/IBMPlexSans-Medium-Latin1.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 300;
    font-display: fallback;
    src: local('IBM Plex Mono Light Italic'),
      local('IBMPlexMono-LightItalic'),
      url(${IBMPlexMono}) format('woff2');
      unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 300;
    font-display: fallback;
    src: local('IBM Plex Sans Light'),
      local('IBMPlexSans-Light'),
      url(${IBMPlexSansLight}) format('woff2');
      unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
    src: local('IBM Plex Sans Medium'),
      local('IBMPlexSans-Medium'),
      url(${IBMPlexSansMedium}) format('woff2');
      unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
  }

  :root {
    --radius: 5px;
    --color-primary: #364f6b;
    --color-secondary: #3fc1c9;
    --color-offwhite: #e7ecef;
    --color-highlight: #fc5185;
    --font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    --font-family-mono: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono', Courier, monospace;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
    color: var(--color-primary);

    @media (prefers-color-scheme: dark) {
      background-color: var(--color-secondary)
    }
  }

  a {
    color: var(--color-secondary);
    transition: color 200ms ease;

    &:hover {
      color: var(--color-secondary);
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
    color: var(--color-highlight);
  }

  p {
    margin-top: 0;
    margin-bottom: 0.7em;
  }
`

export default GlobalStyle
