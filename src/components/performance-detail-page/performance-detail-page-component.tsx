import * as React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import LocationImage from '../location-image/location-image'

import { Location } from '../../types'
import Singer from '../../types/singer'
import SingerList from '../singer-list/singer-list'

interface PerformanceDetailPageComponentProps {
  date: string
  time: string
  location: Location
  singers: Singer[]
}
const PerformanceDetailPageComponent = (props: PerformanceDetailPageComponentProps) => {
  const { date, time, location, singers } = props
  return (
    <div>
      <Header as='h2' attached='top'>
        {`${date} @ ${location}`}
        <Header.Subheader content={time} />
      </Header>
      <Segment attached='bottom'>
        <LocationImage location={location} />
        {singers.length > 0 &&
            <SingerList singers={singers} />
        }
      </Segment>
    </div>
  )
}

export default PerformanceDetailPageComponent