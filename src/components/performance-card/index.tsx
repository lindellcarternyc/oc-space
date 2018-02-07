import * as React from 'react'

import { Card } from 'semantic-ui-react'
import LocationImage from '../location-image/location-image'
import { Performance } from '../../types'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface PerformanceCardProps extends RouteComponentProps<{}> {
  id: string
  performance: Performance
}

const PerformanceCard = (props: PerformanceCardProps): JSX.Element => {
  const { id, performance } = props
  const { location, date, time } = performance
  return (
    <Card 
      onClick={() => {
        props.history.push(`/performance-details&id=${id}`)
      }}
    >
      <LocationImage location={location}/>
      <Card.Content>
        <Card.Header content={date + ' @ ' + location} />
        <Card.Description content={time} />
      </Card.Content>
    </Card>
  )
}

export default withRouter(PerformanceCard)