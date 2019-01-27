import React from 'react'
import Transition from './src/components/transition'

export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}

// this is the total time all the children need to animate out
// with our funyn stagger children thing..
const transitionDelay = 400

// funky hack to delay setting scroll position to 0
// source: https://github.com/gatsbyjs/gatsby/issues/7921#issuecomment-419844693
export function shouldUpdateScroll({ pathname }) {
  if (window.__navigatingToLink) {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = JSON.parse(
      window.sessionStorage.getItem(`@@scroll|${pathname}`)
    )
    window.setTimeout(() => window.scrollTo(...savedPosition), transitionDelay)
  }
  return false
}
