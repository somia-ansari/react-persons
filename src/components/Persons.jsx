import React from 'react'
import './Persons.css'
import Person from './Person'


export default function Persons() {
  const personsData = [
    {
      "name": "Bushra",
      "age": "10",
      "description": "Chef at Mariotte",
      "isEditMode": false
    },
    {
      "name": "Dua",
      "age": "2",
      "description": "Happiness officer",
      "isEditMode": false


    },
    {
      "name": "Aliza",
      "age": "5",
      "description": "Comedian at youtube",
      "isEditMode": false


    }
  ],
    enableEdit = () => {
      alert('Hello World!!')
    }

  return (
    <div className="Persons">

      <h1>Persons</h1>
      {
        personsData.map(person => <Person person={person} callEnableEdit={enableEdit} />)
      }

    </div>
  )
}
