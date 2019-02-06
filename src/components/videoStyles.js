import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* display: flex;
  flex-direction: column; */

  &.type--desktop {
    max-width: 800px;

    @media (max-width: 1099px) {
      align-self: center;
    }
  }

  &.type--mobile {
    width: 60%;
    max-width: 300px;
    margin: 0 auto;
  }

  .mask  {
    border-radius: var(--radius);
    overflow: hidden;
    position: relative;
    z-index: 2;
    box-shadow: 0 1px 0 1px var(--color-offwhite);

    img {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    video {
      transition: opacity 500ms ease-in;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
    }

    video[data-can-play='true'] {
      opacity: 1;
    }
  }

  &.type--desktop .mask {
    padding-bottom: 60.5%;
  }

  &.type--mobile .mask {
    padding-bottom: 178%;
  }
`
