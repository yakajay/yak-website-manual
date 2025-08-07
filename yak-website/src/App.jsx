import React from 'react'
import { Cricket } from './August'
import "./App.css"
import {useState} from 'react';
import New from './Functions';
import { Hello, Array, FunOne, FunTwo } from './Functions';
import ConditionalOutput from './ConditionalOutput';
import CondOut from './CondOut';
import FormConecpt from './FormsConecpt';

// let city = "Hyderabad";
// city = "Begumpet";

const App = () => {
  const [city, setCity] = useState("Hyderabad")
  const [firstName, setFirstName] = useState('Ajay');
  const [lastName, setLastNae] = useState('Kumar');
  const [age, setAge] = useState(32);

  const dataHandler = () => {
    setFirstName("Vijay")
    setLastNae("Kiran")
    setAge(21)
    setCity("Secunderabad")
  }
    return (
    <div className="text-area">
      {/* /* The code you provided is a React functional component named `App`. */ }
      {/* My Name is Kumar from {firstName}
      <h1>{lastName}</h1>
      <h2>{age}</h2>
      <button onClick={dataHandler}>Change Details</button>
      <Cricket mango={city}/>
      <New/>
      <Hello/>
      <Array/>
      <FunOne/>
      <FunTwo/> */}
      {/* <ConditionalOutput/> */}
      {/* <CondOut /> */}
      <FormConecpt/>
    </div>
  )
}

export default App;