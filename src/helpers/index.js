function isInViewport(boundingBox) {
  return boundingBox.top < window.innerHeight && boundingBox.bottom > 0
}

export { isInViewport }
