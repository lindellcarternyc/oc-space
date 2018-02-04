import * as React from 'react'
import { Card } from 'semantic-ui-react'
import LocationImage from '../../components/location-image/location-image'

import { Performance } from '../../types'

interface UpcomingPerformanceCardProps {
  performance: Performance
}

const UpcomingPerformanceCard = (props: UpcomingPerformanceCardProps): JSX.Element => {
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

export default UpcomingPerformanceCard