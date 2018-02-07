import * as React from 'react'
import * as moment from 'moment'

import { Form, Input } from 'semantic-ui-react'

import { Location, Performance } from '../../types'
import LocationDropdown from '../location-dropdown/location-dropdown'

interface AddPerformanceFormProps {
  onSubmit: (performance: Performance) => void
}
interface AddPerformanceFormState {
  date?: string
  location?: Location
  time?: '6 - 9' | '6 - 10'
}
class AddPerformanceForm extends React.Component<AddPerformanceFormProps, AddPerformanceFormState> {
  constructor(props: AddPerformanceFormProps) {
    super(props)

    this.state = {
      date: undefined,
      location: undefined, 
      time: undefined
    }
  }

  onChangeDate = (evt: React.SyntheticEvent<HTMLElement>, data: { value: string}) => {
    const date = data.value
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
    return this.state.date !== undefined && 
      this.state.time !== undefined && 
      this.state.location !== undefined
  }

  formatDate(date: string): string {
    const formatted = moment(date, 'YYYY-MM-DD').format('ddd, MMMM D')
    return formatted
  }

  onSubmit = (evt: React.SyntheticEvent<HTMLElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (this.isValid()) {
      const date = this.formatDate(this.state.date!)
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
          control={Input}
          type='date'
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