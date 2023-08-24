import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [profileData, setProfileData] = useState([
    { name: "carlos", email: "carlos@carlos.com", id: 1 },
  ]);

  const [error, setError] = useState("");

  const handleSubmit = (name, email) => {
    if (!name.trim() || !email.trim()) {
      setError("Need a valid name");
    } else {
      setProfileData((prev) => [...prev, { name, email, id: prev.length + 1 }]);
      setError("");
    }
  };

  const handleUpdate = (userId, data) => {
    setProfileData((prev) =>
      prev.map((user) => {
        if (userId === user.id) user.fetchId = data.id;
        return user;
      })
    );
  };

  console.log(profileData);

  return (
    <>
      <Form onSubmit={handleSubmit} error={error} />
      <Users profileData={profileData} handleUpdate={handleUpdate} />
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

function Users({ profileData, handleUpdate }) {
  const postFetch = async (name, email, id) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    console.log(data);
    handleUpdate(id, data);
  };

  return (
    <>
      <h2>Users:</h2>
      <ul>
        {profileData.map((user, index) => (
          <h5
            className="list"
            key={user.id}
            onClick={() => postFetch(user.name, user.email, user.id)}
          >
            {`User ${++index}: ${user.name} `}
            {user.fetchId && `${user.fetchId}`}
          </h5>
        ))}
      </ul>
    </>
  );
}
