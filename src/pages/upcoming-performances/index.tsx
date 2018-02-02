import * as React from 'react'

import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import StoreState from '../../store/store-state'
import { addPerformance } from '../../actions'

import { Header, Card, Button } from 'semantic-ui-react'
const image = require('../../assets/images/matthew.png')
import UpcomingPerformanceCard from './upcoming-performance-card'

import Page from '../../components/page'
import { Performance } from '../../types'

interface UpcomingPerformancesProps {
  performances: Performance[]
  addPerformance: (performance: Performance) => void
}

// let added = 0

const UpcomingPerformances = (props: UpcomingPerformancesProps) => {
  return (
    <Page authenticated={false} signinCallback={() => console.dir('signin from upcoming?')}>
      <Button 
        content='Add Performance '
        onClick={() => {
          props.addPerformance({
            image: image as string,
            location: 'Times Square',
            time: '6 - 9PM',
            date: 'Mon, June 8'
          })
        }}
      />
      <Header as='h2' content='Upcoming Performances' />
      <Card.Group>
        {props.performances.map(performance => {
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
  const { performanceStore } = state
  return { 
    performances: performanceStore.performances
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    addPerformance: bindActionCreators(addPerformance, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingPerformances)