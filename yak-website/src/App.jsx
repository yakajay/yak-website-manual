import React from 'react'
import { Cricket } from './August'
import "./App.css"
import {useState} from 'react';

// let city = "Hyderabad";
// city = "Begumpet";

const App = () => {
  const [city, setCity] = useState(0)
  const [firstName, setFirstName] = useState('Ajay');
  const [lastName, setLastNae] = useState('Kumar');
  const [age, setAge] = useState(32);

  const dataHandler = () => {
    setFirstName("Vijay")
    setLastNae("Kiran")
    setAge(21)
  }
    return (
    <div className="text-area">
      My Name is Kumar from {firstName}
      <h1>{lastName}</h1>
      <h2>{age}</h2>
      <button onClick={dataHandler}>Change Details</button>
      <Cricket mango={city}/>
    </div>
  )
}

export default App
