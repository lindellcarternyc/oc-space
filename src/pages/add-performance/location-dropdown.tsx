import * as React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { Location } from '../../types'

interface LocationOption {
  key: Location
  value: Location
  text: Location
}
const optionFromLocation = (location: Location): LocationOption => {
  return {
    key: location,
    value: location,
    text: location
  }
}

interface LocationDropdownProps {
  onChange: (location: Location) => void
}
interface LocationDropdownState {
  location: Location | null
}
class LocationDropdown extends React.Component<LocationDropdownProps, LocationDropdownState> {
  constructor(props: LocationDropdownProps) {
    super(props)

    this.state = {
      location: null
    }
  }
  onChange = (evt: React.SyntheticEvent<HTMLElement | KeyboardEvent>, data: { value: string }) => {
    // console.dir('changed')
    const { value } = data
    const location = value as Location
    this.setState({location}, () => {
      this.props.onChange(location)
    })
  }

  onClose = (evt: React.SyntheticEvent<HTMLElement>, data: {}) => {
    if (evt !== undefined) {
      evt.preventDefault()
      evt.stopPropagation()
    }

    console.dir('on close')
    console.dir({data})
  }
  render() {
    const options: LocationOption[] = [
      optionFromLocation(Location.HeraldSquare),
      optionFromLocation(Location.PortAuthority),
      optionFromLocation(Location.TimesSquare),
      optionFromLocation(Location.UnionSquare)
    ]
    return (
      <Dropdown 
        fluid
        search
        selection
        placeholder='Pick a location...'
        options={options}
        onChange={this.onChange}
        value={this.state.location ? this.state.location : undefined}
      />
    )
  }
}

export default LocationDropdown