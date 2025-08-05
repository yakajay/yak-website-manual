import { useState } from 'react';
import July from './components/July';
import August from './components/August';

const ConditionalOutput = () => {
    const [subject, setSubject] = useState(false);
    const [details, setDetails] = useState(false)

    const julyHandler = () => {
        setSubject(true)
        setDetails(false)
    }

    const augustHandler = () => {
        setDetails(true)
        setSubject(false)
    }

    return (
        <div>
            <button onClick={julyHandler}>July Component</button>
            <button onClick={augustHandler}>August Component</button>
            {/* {details && <August/>}
            {subject && <July/>} */}
            {subject ? <July/> : <August/>}
        </div>
    )
}

export default ConditionalOutput;