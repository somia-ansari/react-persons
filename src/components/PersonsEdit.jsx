import React from 'react'
import './PersonsEdit.css'
import PropType from 'prop-types'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'



export default function PersonsEdit(props) {
  return (
    <Card.Body className="PersonsEdit">
      <Card.Title>
        Edit Person
      </Card.Title>
      <Card.Text>
        <input value={props.person.name} />
        <input type="number" value={props.person.age} />
        <textarea>{props.person.description}</textarea>
      </Card.Text>
      <ButtonGroup aria-label="Basic example" className="button-group">
        <Button variant="light">
          <FontAwesomeIcon className="text-info" icon={faCheck} />
        </Button>
        <Button variant="light">
          <FontAwesomeIcon className="text-danger" icon={faTimes} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  )
}

PersonsEdit.propTypes = {
  person: PropType.object
}
