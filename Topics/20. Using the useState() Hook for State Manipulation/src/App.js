import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonState] = useState({
    person: [
      {name: 'Md. Imrul Kayes', age: 24},
      {name: 'Maria Noor', age: 24},
      {name: 'Prome', age: 23}
    ],
    otherState: 'some other value'
  });

  const swithNameHandler = () => {
    setPersonState({
      person: [
        {name: 'Md. Imrul Kayes', age: 24},
        {name: 'Maria Noor', age: 24},
        {name: 'RFProme', age: 23}
      ],
      otherState: 'some other value'
    })
  };
  
    return (
      <div className="App">
        <h1>Md. Imrul Kayes</h1>
        <p>
          I am a big fan fo Selena Gomez.
        </p>
        <br></br>
        <button onClick={swithNameHandler}>Switch Name</button>
        <br></br><br></br>
        <Person name = {personsState.person[0].name} age = {personsState.person[0].age}/>
        <br></br>
        <Person name = {personsState.person[1].name} age = {personsState.person[1].age}/>
        <br></br>
        <Person name = {personsState.person[2].name} age = {personsState.person[2].age}/>
      </div>
    );
}

export default App;
