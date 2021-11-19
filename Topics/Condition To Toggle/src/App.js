import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {name: 'Md. Imrul Kayes', age: 24},
      {name: 'Maria Noor', age: 24},
      {name: 'Prome', age: 23}
    ],
    otherState: 'some other value'
  }

  swithNameHandler = (newName) => {
    this.setState({
      person: [
        {name: newName, age: 24},
        {name: 'Maria Noor', age: 24},
        {name: 'RFProme', age: 23}
      ],
      showPerson : true
    })
  }

  nameChangdHandler = (event) => {
    this.setState({
      person: [
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

    return (
      <div className="App">
        <h1>Md. Imrul Kayes</h1>
        <p>
          I am a big fan fo Selena Gomez.
        </p>

        <button 
        style={style}
        onClick={this.togglePersonHandler}>
            Switch Name
          </button>

        {this.state.showPerson ? <div>
          <Person 
          name = {this.state.person[0].name} 
          age = {this.state.person[0].age}/>

          <Person  
          name = {this.state.person[1].name}
          click = {this.swithNameHandler.bind(this, 'MdIKTushar')} 
          age = {this.state.person[1].age}
          changed = {this.nameChangdHandler}/>

          <Person 
          name = {this.state.person[2].name} 
          age = {this.state.person[2].age}/>

          {/* children */}
          <Person>Hello</Person>
        </div> : null}

      </div>
    );
  }
}

export default App;
