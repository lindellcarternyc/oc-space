import * as React from 'react'

import { Image } from 'semantic-ui-react'
import { Location } from '../../types'
 
import { ImageUtils } from '../../utils'

const LocationImage = (props: {location: Location}) => {
  const image = ImageUtils.imageForLocation(props.location)
  return <Image src={image}/>
}

export default LocationImage