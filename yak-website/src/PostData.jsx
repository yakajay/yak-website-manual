import { useState } from "react";

const PostData = () => {
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPhone, setEmpPhone] = useState("");
  const [empCity, setEmpCity] = useState("");
  const [status, setStatus] = useState(null); // success/error message

  const empHandler = async (e) => {
    e.preventDefault(); // this to do not refresh the page after submission.

    const empDetails = {
      empName: empName.trim(),
      empEmail: empEmail.trim(),
      empPhone: Number(empPhone),
      empCity: empCity.trim(),
    };

    try {
      const response = await fetch("http://localhost:5500/api/add-emp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(empDetails),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Request failed with ${response.status}`);
      }

      const data = await response.json();
      console.log("Server response:", data);
      setStatus("Employee added successfully.");

      // reset form
      setEmpName("");
      setEmpEmail("");
      setEmpPhone("");
      setEmpCity("");
    } catch (error) {
      console.error(error);
      setStatus("Failed to add employee. Check server/CORS/logs.");
    }
  };

  return (
    <div>
      <form onSubmit={empHandler}>
        <input
          type="text"
          placeholder="Name"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        /><br/>
        <input
          type="email"
          placeholder="Email"
          value={empEmail}
          onChange={(e) => setEmpEmail(e.target.value)}
        /><br/>
        <input
          type="number"
          placeholder="Phone"
          value={empPhone}
          onChange={(e) => setEmpPhone(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="City"
          value={empCity}
          onChange={(e) => setEmpCity(e.target.value)}
        /><br/>
        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default PostData;
