import * as React from 'react'

import { Header, Card, Image } from 'semantic-ui-react'

import Page from '../../components/page'

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

export interface Performance {
  image: string
  date: string
  location: string
  time: string
}

interface UpcomingPerformancesProps {
  performances: Performance[]
}
const UpcomingPerformances = (props: UpcomingPerformancesProps) => {
  const { performances } = props
  return (
    <Page authenticated={false}>
      <Header as='h2' content='Upcoming Performances' />
      <Card.Group>
        {performances.map(performance => {
          return (
            <UpcomingPerformanceCard 
              key={performance.date + '_' + performance.location}
              performance={performance}
            />
          )
        })}
      </Card.Group>
    </Page>
  )
}

export default UpcomingPerformances