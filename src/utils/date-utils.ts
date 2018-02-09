import * as moment from 'moment'

export enum DateFormat {
  inputFormat = 'YYYY-MM-DD',
  outputFormat = 'ddd, MMMM D'
}

export const parseInputDate = (inputDate: string): string => {
  const m = moment(inputDate, DateFormat.inputFormat)
  return m.format(DateFormat.outputFormat)
}

export const parseOutputDate = (outputDate: string): string => {
  const m = moment(outputDate, DateFormat.outputFormat)
  return m.format(DateFormat.inputFormat)
}

export const minDate = (lastDate: string | undefined) => {
  const m = lastDate !== undefined ?
    moment(lastDate) : moment()
  
  return m.format(DateFormat.inputFormat)
}