import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  @media (min-width: 850px) {
    width: 720px;
  }

  .mask  {
    border-radius: var(--radius);
    overflow: hidden;
    position: relative;
    z-index: 2;
    padding-bottom: 60.5%;
    box-shadow: 0 1px 0 1px var(--color-offwhite);

    @media (min-width: 850px) {
      padding-bottom: 450px;
    }

    img {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* filter: blur(10px); */
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

  .shadow {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: var(--radius);
  }
`
