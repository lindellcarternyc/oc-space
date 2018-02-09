import * as React from 'react'

import { Input } from 'semantic-ui-react'
import { minDate, parseInputDate } from '../../utils/date-utils'

interface NewPerformanceDateInputProps {
  onChange: (outputDate: string) => void
  minDate?: string
}

const NewPerformanceDateInput = (props: NewPerformanceDateInputProps) => {
  const onChange = (evt: React.SyntheticEvent<HTMLElement>, data: { value: string} ) => {
    const date = parseInputDate(data.value)
    props.onChange(date)
  }

  const minPerformanceDate = minDate(props.minDate)
  return (
    <Input 
      type='date'
      onChange={onChange}
      min={minPerformanceDate}
    />
  )
}

export default NewPerformanceDateInput
