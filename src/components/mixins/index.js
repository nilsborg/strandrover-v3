export function flexUnit(amount, min, max, unit = 'vw', prop = 'font-size') {
  const minBreakpoint = (min / amount) * 100
  const maxBreakpoint = max ? (max / amount) * 100 : false
  const dimension = unit === 'vw' ? 'width' : 'height'

  return `
    @media (max-${dimension}: ${minBreakpoint}px) {
      ${prop}: ${min}px;
    }

    ${
      max
        ? `
      @media (min-${dimension}: ${maxBreakpoint}px) {
        ${prop}: ${max}px;
      }
    `
        : ''
    }

    ${prop}: ${amount}${unit}
  `
}
