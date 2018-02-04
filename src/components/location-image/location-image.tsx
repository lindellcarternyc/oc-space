import * as React from 'react'

import { Image } from 'semantic-ui-react'
import { Location } from '../../types'

const TimesSquare = require('../../assets/images/times_square.jpg')
const PortAuthority = require('../../assets/images/port-authority.png')
const HeraldSquare = require('../../assets/images/herald-square.jpg')
const UnionSquare = require('../../assets/images/union-square.jpg')

const imageForLocation = (location: Location): string | undefined => {
  switch (location) {
    case Location.TimesSquare:
      return TimesSquare
    case Location.PortAuthority:
      return PortAuthority
    case Location.HeraldSquare:
      return HeraldSquare
    case Location.UnionSquare:
      return UnionSquare
    default:
      return
  }
}

const LocationImage = (props: {location: Location}) => {
  const image = imageForLocation(props.location)
  return <Image src={image}/>
}

export default LocationImage