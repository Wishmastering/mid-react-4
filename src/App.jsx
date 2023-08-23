import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [profileData, setProfileData] = useState([
    { name: "carlos", email: "carlos@carlos.com" },
  ]);

  const [error, setError] = useState("");

  const handleSubmit = (name, email) => {
    if (!name.trim() || !email.trim()) {
      setError("Need a valid name");
    } else {
      setProfileData((prev) => [...prev, { name, email }]);
      setError("");
    }
  };

  console.log(profileData);

  return (
    <>
      <Form onSubmit={handleSubmit} error={error} />
      <Users profileData={profileData} />
    </>
  );
}

function Form({ onSubmit, error }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email);
    setEmail("");
    setName("");
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="first-input-container">
          <div className="label">
            <label htmlFor="name">Enter your name:</label>
          </div>
          <div>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        {/* new input */}

        <div>
          <div className="label">
            <label htmlFor="email">Enter your name:</label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {error && <h5 style={{ color: "red " }}>Both fields are required</h5>}
        {/* submit button */}
        <button type="submit">Signup!</button>
      </form>
    </>
  );
}

function Users() {
  return (
    <>
      <h2>Users:</h2>
    </>
  );
}
