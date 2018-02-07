import * as React from 'react'

import { CardGroup } from 'semantic-ui-react'
import PerformanceCard from './'
import { Performance } from '../../types'

const cards = (performances: {id: string, performance: Performance}[]): JSX.Element[] => {
  return performances.map(({id, performance}) => {
    return (
      <PerformanceCard 
        id={id}
        key={performance.date + '__' + performance.location}
        performance={performance}
      />
    )
  })
}

const PerformanceCards = (props: {performances: {id: string, performance: Performance}[]}): JSX.Element => {
  return (
    <CardGroup>
      {cards(props.performances)}
    </CardGroup>
  )
}

export default PerformanceCards