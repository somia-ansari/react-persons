import React from 'react'
import './PersonsInfo.css'
import PropType from 'prop-types'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'


export default function PersonsInfo(props) {

  return (
    <Card.Body className="PersonsInfo">
      <Card.Title>{props.person.name}, {props.person.age}</Card.Title>
      <Card.Text>{props.person.description}</Card.Text>
      <ButtonGroup aria-label="Basic example" className="button-group">
        <Button variant="light" onClick={props.onClickEdit}><FontAwesomeIcon className="text-info" icon={faEdit} /></Button>
        <Button variant="light"><FontAwesomeIcon className="text-danger" icon={faTrash} /></Button>
      </ButtonGroup>
    </Card.Body>
  )
}

PersonsInfo.propTypes = {
  person: PropType.object,
  onClickEdit: PropType.func
}
