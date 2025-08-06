import { useState } from 'react';
import July from './components/July';
import August from './components/August';


const CondOut = () => {
    const [subject, setSubject] = useState(false);
    const [marks, setMarks] = useState(false);

    const marksHand = () => {
        setSubject(true)
        setMarks(false)

    }

    const subjectHand = () => {
        setMarks(true)
        setSubject(false)

    }

    return (
        <div>
            This is New conditional Output
            <button onClick={marksHand}>Button</button>
            <button onClick={subjectHand}>Button</button>
            {/* {subject && <July/>}
            {marks && <August/>} */}
            {subject ? <July/> : <August/>}
        </div>
    )
}

export default CondOut;