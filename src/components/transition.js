import React from 'react'
import posed, { PoseGroup } from 'react-pose'

class Transition extends React.PureComponent {
  render() {
    const RoutesContainer = posed.div({
      enter: { staggerChildren: 150, delayChildren: 100 },
      exit: { staggerChildren: 50 },
    })

    return (
      <PoseGroup animateOnMount={false}>
        <RoutesContainer key={this.props.location.key}>
          {this.props.children}
        </RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition

// position: absolute; top: 16px; left: 0px; width: 1665px; height: 3084px;
