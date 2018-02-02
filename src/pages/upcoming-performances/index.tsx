import * as React from 'react'

import { connect, Dispatch } from 'react-redux'
import { StoreState, Performance } from '../../types'
import { matthewImg } from '../../constants'
import * as actions from '../../actions'

import { Header, Card, Button } from 'semantic-ui-react'

import Page from '../../components/page'
import UpcomingPerformanceCard from './upcoming-performance-card'

interface UpcomingPerformancesProps {
  performances: Performance[]
  dispatch: Dispatch<actions.AddPerformance>
}

let added = 0

const UpcomingPerformances = (props: UpcomingPerformancesProps) => {
  const { performances } = props
  return (
    <Page authenticated={false}>
      <Button 
        content='Add Performance '
        onClick={() => {
          if (added === 0) {
            props.dispatch(
              actions.addPerformance({
                image: matthewImg, location: 'Times Square',
                date: 'Fri, March 1', time: '6 - 9PM'
              })
            )
            added += 1
          }
        }}
      />
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

const mapStateToProps = (state: StoreState): { performances: Performance[] } => {
  const { performances } = state
  return {
    performances
  }
}
// const mapDispatchToProps = (dispatch: Dispatch<actions.AddPerformance>) => {
//   return {
//     addPerformance: (performance: Performance) => {
//       console.dir('map dispatch add Performance')
//       dispatch(actions.addPerformance(performance))
//     }
//   }
// }

export default connect(
  mapStateToProps
)(UpcomingPerformances)