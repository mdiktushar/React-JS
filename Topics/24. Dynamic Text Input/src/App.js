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
      ]
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

  render() {
    return (
      <div className="App">
        <h1>Md. Imrul Kayes</h1>
        <p>
          I am a big fan fo Selena Gomez.
        </p>
        <br></br>
        <button onClick={this.swithNameHandler.bind(this, 'Tushar')}>Switch Name</button>
        <br></br><br></br>

        {/* <Person 
        name = {this.state.person[0].name} 
        age = {this.state.person[0].age}/>
        <br></br> */}

        <Person  
        name = {this.state.person[1].name}
        click = {this.swithNameHandler.bind(this, 'MdIKTushar')} 
        age = {this.state.person[1].age}
        changed = {this.nameChangdHandler}/>
        <br></br>
{/* 
        <Person 
        name = {this.state.person[2].name} 
        age = {this.state.person[2].age}/> */}

        {/* children */}
        <Person>Hello</Person>

      </div>
    );
  }
}

export default App;
