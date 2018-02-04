import * as React from 'react'

import { Card } from 'semantic-ui-react'
import LocationImage from '../location-image/location-image'
import { Performance } from '../../types'

interface PerformanceCardProps {
  performance: Performance
}

const PerformanceCard = (props: PerformanceCardProps): JSX.Element => {
  const { location, date, time } = props.performance
  return (
    <Card>
      <LocationImage location={location}/>
      <Card.Content>
        <Card.Header content={date + ' @ ' + location} />
        <Card.Description content={time} />
      </Card.Content>
    </Card>
  )
}

export default PerformanceCard