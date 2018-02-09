import * as React from 'react'

import { Form } from 'semantic-ui-react'

import { Location, Performance } from '../../types'
import LocationDropdown from '../location-dropdown/location-dropdown'
import NewPerformanceDate from './new-performance-date'
import { todayAsOutput } from '../../utils/date-utils'

interface AddPerformanceFormProps {
  onSubmit: (performance: Performance) => void
}
interface AddPerformanceFormState {
  date: string
  location: Location
  time?: '6 - 9' | '6 - 10'
}

class AddPerformanceForm extends React.Component<AddPerformanceFormProps, AddPerformanceFormState> {
  constructor(props: AddPerformanceFormProps) {
    super(props)

    this.state = {
      date: todayAsOutput(),
      location: Location.NONE,
      time: undefined
    }
  }

  onChangeDate = (date: string) => {
    this.setState({date})
  }

  getTimeFormLocation(location: Location) {
    if (location === Location.TimesSquare) {
      return '6 - 10'
    } else {
      return '6 - 9'
    }
  }

  onChangeLocation = (location: Location) => {
    const time = this.getTimeFormLocation(location)
    this.setState({location, time})
  }

  isValid(): boolean {
      return this.state.time !== undefined && 
      this.state.location !== Location.NONE
  }

  onSubmit = (evt: React.SyntheticEvent<HTMLElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (this.isValid()) {
      const date = this.state.date!
      const time = this.state.time! + ' PM'
      const location = this.state.location!

      const performance: Performance = {
        date, time, location
      }
      this.props.onSubmit(performance)
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field
          label='Date'
          control={NewPerformanceDate}
          onChange={this.onChangeDate} 
        />
        <Form.Field 
          label='Location' 
          control={() => (
            <LocationDropdown 
              onChange={this.onChangeLocation}
              location={this.state.location}
            />
          )}
        />
        {this.state.time !== undefined ?
          <p>{this.state.time}</p> :
          null
        }
        <Form.Group>
          <Form.Button 
            color='blue'
            disabled={!this.isValid()}
            onClick={this.onSubmit}
            content='Add Performance'
          />
        </Form.Group>
      </Form>
    )
  }
}

export default AddPerformanceForm