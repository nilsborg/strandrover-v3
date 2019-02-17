import styled from 'styled-components'

export const StyledMarker = styled.div`
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(-90deg) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* border-left: 1px solid coral;
  border-top: 1px solid green; */
  fill: var(--color-secondary);

  svg {
    transform: rotate(180deg);
  }
`
