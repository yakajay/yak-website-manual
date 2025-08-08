import React from 'react'
import "./App.css"
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import ApiService from './ApiService'; // to fetch the data from this componenet.
import August from './August';
import NavBAr from './NavBar';
import July from './components/July';

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
      <>
      <NavBAr/>
      <Routes>
        <Route path='/Friday' element={<ApiService/>}/>
        <Route path='/August' element={<August/>}/>
        <Route path='/July' element={<July/>}/>
      </Routes>
      </>
  )
}

export default App;