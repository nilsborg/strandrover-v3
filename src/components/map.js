import React, { Component } from 'react'
import ReactMapGL, { BaseControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { StyledMarker } from './mapStyles'
import MarkerIcon from '../assets/images/link.svg'

// const TOKEN =
//   'pk.eyJ1Ijoibmlsc2JvcmciLCJhIjoiY2ptYnV4d3J2MDF6ejN2bzl3OXVzNjAyOSJ9.RxfSai2PGVlPOkDcfpM4-Q'

const TOKEN =
  'pk.eyJ1IjoibWF6ZTAzIiwiYSI6ImNpbGUxM203czAwMjF2am00Z2Z6cWV2N2cifQ.sinh0ug5Q0R7CG4H3mo1tA'

class Marker extends BaseControl {
  _render() {
    console.log(this.props)

    const { longitude, latitude, name } = this.props

    const [x, y] = this._context.viewport.project([longitude, latitude])

    const markerPos = {
      left: x,
      top: y,
    }

    return (
      <StyledMarker ref={this._containerRef} style={markerPos}>
        <MarkerIcon />
        <span>{name}</span>
      </StyledMarker>
    )
  }
}

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      zoom: 6,
      scrollZoom: false,
    },
  }

  componentDidMount() {
    const { longitude, latitude } = this.props.center

    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: longitude || 0,
        latitude: latitude || 0,
      },
    })
  }

  updateViewport = viewport => {
    // prevent pixel values for viewport size to be set on updateing..
    console.log(viewport)

    this.setState({
      viewport: {
        ...viewport,
        width: '100%',
        height: '100%',
      },
    })
  }

  render() {
    const { markers } = this.props

    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={this.updateViewport}
        mapStyle={'mapbox://styles/maze03/cj3tqo5r100002rs15ao7j2nf'}
      >
        {markers &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              longitude={marker.longitude}
              latitude={marker.latitude}
              name={marker.name}
            />
            // <span>{marker.longitude}</span>
          ))}
      </ReactMapGL>
    )
  }
}

export default Map
