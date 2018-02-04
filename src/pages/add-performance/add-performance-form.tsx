import * as React from 'react'
import * as moment from 'moment'

import { Form, Input } from 'semantic-ui-react'
import LocationDropdown from './location-dropdown'
import { Location } from '../../types'

interface AddPerformanceFormProps {
  onSubmit: (data: AddPerformanceFormData) => void
}

interface AddPerformanceFormState {
  location: null | Location
  time: string | null
  date: string | null
}
export interface AddPerformanceFormData {
  date: string, time: string, location: Location
}
class AddPerformanceForm extends React.Component<AddPerformanceFormProps, AddPerformanceFormState>  {
  constructor(props: AddPerformanceFormProps) {
    super(props)

    this.state = {
      location: null,
      date: null,
      time: null
    }
  }
  
  onChangeLocation = (location: Location) => {
    let time: '6 - 9PM' | '6 - 10PM'
    if (location === Location.TimesSquare) {
      time = '6 - 10PM'
    } else {
      time = '6 - 9PM'
    }
    this.setState({location, time})
  }

  onChangeDate = (evt: React.SyntheticEvent<HTMLInputElement>, data: { value: string}) => {
    this.setState({date: data.value})
  }

  onSubmit = () => {
    const { date, time, location } = this.state
    
    if (date !== null && time !== null && location !== null) {
      const formattedDate = this.formatDate(date)
      this.props.onSubmit({date: formattedDate, time, location})
    }
  }

  get isValid(): boolean {
    const { date, time, location } = this.state
    return date !== null && time !== null && location !== null
  }

  formatDate(date: string): string {
    console.dir({date})
    const parsed = moment(date, 'YYYY-MM-DD').format('ddd, MMMM D')
    return parsed
  }

  render() {
    return (
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
    )
  }
}

export default AddPerformanceForm