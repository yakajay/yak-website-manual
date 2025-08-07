import { useState } from "react";

const FormConecptMS = () => {
const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      department: "",
    });

    const valueDetails = (e) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };

    return (
        <div className="form-section">
            <form className="form-input-section" onSubmit={handleSubmit}>
                <div className="form-input">
                    <label>Username</label><br/>
                    <input type="text" name="username" onChange={valueDetails}/>
                </div>
                <div className="form-input">
                    <label>Email</label><br/>
                    <input type="email" name="email" onChange={valueDetails}/>
                </div>
                <div className="form-input">
                    <label>Password</label><br/>
                    <input type="password" name="password" onChange={valueDetails}/>
                </div>
                <div className="form-input">
                    <label>Department</label><br/>
                    <input type="text" name="department" onChange={valueDetails}/>
                </div>
                <div className="form-input">
                    <button className="button-section" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormConecptMS;