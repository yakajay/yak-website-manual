import { useState } from 'react';

const New = () => {
    const [city, setCity] = useState("Hyderabad");
    const [name, setName] = useState("Kumar");
    const [degree, setDegree] = useState("Bcom");
    const [year, setYear] = useState(2012);

    const myInfo = () => {
        setCity("Markapur")
        setName("Ajay")
        setDegree("Bcom Computers")
        setYear("2014")
    } 

    return (
        <div>
            This is {name} from {city} and i completed my graduation from {degree} in the year {year}
            <button onClick={myInfo}>Update Details</button>
        </div>
    )
}

export default New;

export const Hello = () => {
    return (
        <div>
            Hey There
        </div>
    )
}

Hello;

export function Array () {
    return (
        <div>
            This function export
        </div>
    )
}

export function FunOne () {
    return (
        <h1>Hello</h1>
    )
}

export const FunTwo = ({ city }) => {
    return (
    <div>Hello Buddy!, How are you today!, {city}</div>
    )
}

FunTwo;