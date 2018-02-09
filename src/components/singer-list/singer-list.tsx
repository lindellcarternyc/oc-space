import * as React from 'react'

import { List, Segment } from 'semantic-ui-react'

import Singer from '../../types/singer'

const SingerListItem = (
  props: {singer: Singer, attached: 'top' | 'bottom' | true}) => {
  return (
    <Segment attached={props.attached || true}>{props.singer.name}</Segment>
  )
}

const makeSingerListItems = (singers: Singer[]) => {
  return singers.map((singer, idx) => {
    let attached: true | 'top' | 'bottom'
    if (idx === 0) {
      attached = 'top'
    } else if (idx === singers.length - 1) {
      attached = 'bottom'
    } else {
      attached = true
    }
    return (
      <SingerListItem
        key={singer.name}
        attached={attached}
        singer={singer}
      />
    )
  })
}

const SingerList = (props: {singers: Singer[]}) => {
  const items = makeSingerListItems(props.singers)
  return (
    <List>
      {items}
    </List>
  )
}

export default SingerList