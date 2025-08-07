import { useState } from "react";

const FormConecpt = () => {
    const [username, setUsername] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [department, setDepartment] = useState(" ")

    const valueDetails = (e) => {
        e.preventDefault() // is a default function to not refresh the page while submit the form.
        var ouptDetails = [username, email, password, department];

        console.log("ouptDetails", ouptDetails);
    }

    return (
        <div className="form-section">
            <form className="form-input-section" onSubmit={valueDetails}>
                <div className="form-input">
                    <label>Username</label><br/>
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Email</label><br/>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Password</label><br/>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Department</label><br/>
                    <input type="text" name="department" onChange={(e) => setDepartment(e.target.value)}/>
                </div>
                <div className="form-input">
                    <button className="button-section" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormConecpt;