import * as React from 'react'

import { Dropdown } from 'semantic-ui-react'

import { Location } from '../../types'

interface LocationDropdownOption {
  key: number
  value: Location
  text: Location
}
const optionForLocation = (location: Location, key: number = 0): LocationDropdownOption => {
  return {
    key,
    value: location,
    text: location
  }
}
const options = (() => {
  return [
    optionForLocation(Location.HeraldSquare),
    optionForLocation(Location.PortAuthority, 1),
    optionForLocation(Location.TimesSquare, 2),
    optionForLocation(Location.UnionSquare, 3)
  ]
})()

interface LocationDropdownProps {
  onChange: (location: Location) => void
  location: Location | undefined
}
interface LocationDropdownState {
  value: Location | undefined
}
class LocationDropdown extends React.Component<LocationDropdownProps, LocationDropdownState> {
  constructor(props: LocationDropdownProps) {
    super(props)
  }
  onChange = (evt: React.SyntheticEvent<HTMLElement>, data: { value: Location }) => {
    const { value } = data
    this.props.onChange(value)
  }

  render() {
    // const value =
    return (
      <Dropdown 
        fluid
        selection
        placeholder='Select a location...'
        options={options}
        onChange={this.onChange}
        value={this.props.location}
      />
    )
  }
}

export default LocationDropdown