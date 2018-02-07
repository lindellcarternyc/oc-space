import * as React from 'react'
import { Header } from 'semantic-ui-react'
import LocationImage from '../location-image/location-image'

import { Performance } from '../../types'

interface PerformanceDetailPageComponentProps {
  performance: Performance
}
const PerformanceDetailPageComponent = (props: PerformanceDetailPageComponentProps) => {
  const { performance } = props
  return (
    <div>
      <Header as='h2'>
        {`${performance.date} @ ${performance.location}`}
        <Header.Subheader content={performance.time + ' PM'} />
      </Header>
      <LocationImage location={performance.location} />
    </div>
  )
}

export default PerformanceDetailPageComponent