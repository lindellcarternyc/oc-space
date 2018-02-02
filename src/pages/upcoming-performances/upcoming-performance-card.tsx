import * as React from 'react'
import { Card, Image } from 'semantic-ui-react'

import { Performance } from '../../types'

interface UpcomingPerformanceCardProps {
  performance: Performance
}

const UpcomingPerformanceCard = (props: UpcomingPerformanceCardProps): JSX.Element => {
  const { image, location, date, time } = props.performance
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header content={date + ' @ ' + location} />
        <Card.Description content={time} />
      </Card.Content>
    </Card>
  )
}

export default UpcomingPerformanceCard