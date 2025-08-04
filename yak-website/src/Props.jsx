import { useState } from "react";
import FunTwo from './Functions';

const Props = () => {
    const [team1, setTeam1] = useState("RCB");
    const [team2, setTeam2] = useState("SRH");
    const [year, setYear] = useState(2025);
    const [city, setCity] = useState("Bangalore, India")

    const match = () => {
        setTeam1("India")
        setTeam2("Australia")
        setYear(2026)
        setCity("Perth, Australia")
    }
    return (
        <div>
            I am going to attend a {team1} vs {team2} cricket match in the year {year} in {city}
            <br/><br/>
            <button onClick={match}>Update Match details</button>
            <FunTwo apple={city}/>
        </div>
    )
}

export default Props;