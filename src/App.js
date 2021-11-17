import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Md. Imrul Kayes</h1>
        <p>
          I am a big fan fo Selena Gomez.
        </p>
        <Person name = "Tushar" gender = "Male"/>
        <Person name = "Maria" gender = "Girl"/>
        <Person name = "Prome" gender = "Girl"/>
      </div>
    );
  }
}

export default App;
