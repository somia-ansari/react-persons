import React, { Component } from 'react'
import './Persons.css'
import Person from './Person'


export default class Persons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      personsData: [
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
      ]
    }
  }

  toggleEdit = (p, newValue) => {
    this.setState({
      personsData: this.state.personsData.map(pFocus => {
        pFocus.name === p.name ? pFocus.isEditMode = newValue : pFocus.isEditMode = false
        return pFocus;
      }
      )
    })
  }
  deletingPerson = (p) => {
    this.setState({
      personsData: this.state.personsData.filter(function (person) {
        return person.name !== p.name
      }
      )
    })
  }
  // changeName = (name) => {
  //   this.setState({
  //     personsData: this.state.personsData.map(pFocus => {
  //       pFocus.name === name.name ? pFocus.name = "Somia" : pFocus.name = name.name
  //       return pFocus;
  //     }
  //     )
  //   })
  // }

  render() {
    return (
      <div className="Persons" >

        <h1>Persons</h1>
        {
          this.state.personsData.map(person => {
            return <Person person={person}
              callEnableEdit={() => this.toggleEdit(person, true)} callDisableEdit={() => this.toggleEdit(person, false)} changeName={() => this.changeName(person)} deletePerson={() => this.deletingPerson(person)} />
          })
        }

      </div >
    )
  }
}

