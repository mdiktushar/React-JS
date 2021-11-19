import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Md. Imrul Kayes', age: 24},
      {name: 'Maria Noor', age: 24},
      {name: 'Prome', age: 23}
    ],
    otherState: 'some other value',
    showPerson : true
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons : persons
    })
  }

  nameChangdHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 24},
        {name: event.target.value, age: 24},
        {name: 'RFProme', age: 23}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() { 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px soldi blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null
    if(this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map( (person, index) => {
            return (<Person
            click={() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            />)
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Md. Imrul Kayes</h1>
        <p>
          I am a big fan fo Selena Gomez.
        </p>

        <button 
        style={style}
        onClick={this.togglePersonHandler}>
            Toggle Person
          </button>

        {person}

      </div>
    );
  }
}

export default App;
