import * as React from 'react'

import { 
  Header, 
  Form,
  Input
} from 'semantic-ui-react'

import Page from '../../components/page'
import LocationDropdown from './location-dropdown'
import { Location } from '../../types'

interface AddPerformanceProps {
  isAuthenticated: true
  signinCallback: () => void
  upcomingPerformacesCallback: () => void
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
      console.dir({date, time, location})
    }
  }

  get isValid(): boolean {
    const { date, time, location } = this.state
    return date !== null && time !== null && location !== null
  }

  render() {
    return (
      <Page
        addPerformanceCallback={() => { return }}
        authenticated={this.props.isAuthenticated}
        signinCallback={this.props.signinCallback}
        upcomingPerformancesCallback={this.props.upcomingPerformacesCallback}
      >
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

export default AddPerformance