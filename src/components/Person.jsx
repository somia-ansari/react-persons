import React from 'react'
import './Person.css'
import PropType from 'prop-types'
import PersonsInfo from './PersonsInfo'
import { Card } from 'react-bootstrap'
import PersonsEdit from './PersonsEdit'

export default function Person(props) {

  return (
    <Card style={{ width: '18rem' }}>
      {props.person.isEditMode ?
        <PersonsEdit person={props.person} /> :
        <PersonsInfo person={props.person} onClickEdit={props.callEnableEdit} />}
    </Card>
  )
}

Person.propTypes = {
  person: PropType.object,
  callEnableEdit: PropType.func
}
