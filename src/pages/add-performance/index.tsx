import * as React from 'react'

import { 
  Header, 
  Form,
  Input
} from 'semantic-ui-react'

import Page from '../../components/page'
import LocationDropdown from './location-dropdown'
import { Location } from '../../types'

import { Performance } from '../../types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StoreState from '../../store/state'
import { addPerformance } from '../../actions/performances-actions'
import { navigateToPage } from '../../actions/navigation-actions'
import * as NavTypes from '../../types/navigation-types'

interface AddPerformanceProps {
  addPerformance: (performance: Performance) => void
  goToUpcomingPerformances: () => void
}

interface AddPerformanceState {
  location: Location | null
  date: string | null
  time: '6 - 9' | '6 - 10' | null
}

class AddPerformance extends React.Component<AddPerformanceProps, AddPerformanceState> {
  constructor(props: AddPerformanceProps) {
    super(props)

    this.state = {
      location: null,
      date: null,
      time: null
    }
  }

  onChangeLocation = (location: Location) => {
    let time: '6 - 9' | '6 - 10'
    if (location === Location.TimesSquare) {
      time = '6 - 10'
    } else {
      time = '6 - 9'
    }
    this.setState({location, time})
  }

  onChangeDate = (evt: React.SyntheticEvent<HTMLInputElement>, data: { value: string}) => {
    this.setState({date: data.value})
  }

  onSubmit = () => {
    const { date, time, location } = this.state
    
    if (date !== null && time !== null && location !== null) {
      const image = ''
      const performance: Performance = {image, date, time, location}
      this.props.addPerformance(performance)
      this.props.goToUpcomingPerformances()
    }
  }

  get isValid(): boolean {
    const { date, time, location } = this.state
    return date !== null && time !== null && location !== null
  }

  render() {
    return (
      <Page>
        <Header as='h2' content='Add Performance' />
        <Form>
          <Form.Field>
            <LocationDropdown onChange={this.onChangeLocation}/>
          </Form.Field>
          <Form.Field control={Input} type='date' onChange={this.onChangeDate}/>
          {this.state.time !== null &&
            <p>{this.state.time}</p>
          }
          <Form.Group>
            <Form.Button 
              content='Add Performance'
              color='blue'
              disabled={!this.isValid}
              onClick={this.onSubmit}
            />
            <Form.Button 
              content='Clear'
              color='black'
            />
          </Form.Group>
        </Form>
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>): AddPerformanceProps => {
  return {
    addPerformance: (performance: Performance) => {
      dispatch(addPerformance(performance))
    },
    goToUpcomingPerformances: () => {
      dispatch(navigateToPage(NavTypes.Page.UpcomingPerformances))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)
(AddPerformance)