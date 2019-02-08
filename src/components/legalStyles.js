import styled from 'styled-components'

export const LegalContainer = styled.article`
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
