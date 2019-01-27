import React from 'react'
import posed, { PoseGroup } from 'react-pose'

class Transition extends React.PureComponent {
  render() {
    const RoutesContainer = posed.div({
      enter: { staggerChildren: 150, delayChildren: 200 },
      exit: { staggerChildren: 50 },
    })

    return (
      <PoseGroup>
        <RoutesContainer key={this.props.location.key}>
          {this.props.children}
        </RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition
