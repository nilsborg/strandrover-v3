function isInViewport(boundingBox) {
  return boundingBox.top < window.innerHeight && boundingBox.bottom > 0
}

function isMobile() {
  return typeof window === 'undefined'
    ? false
    : navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
}

export { isInViewport, isMobile }
