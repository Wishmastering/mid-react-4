import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={console.log("working")}>
        <div className="first-input-container">
          <div className="label">
            <label htmlFor="name">Enter your name:</label>
          </div>
          <div>
            <input type="text" id="name" placeholder="John Doe" value={name} />
          </div>
        </div>

        {/* new input */}

        <div>
          <div className="label">
            <label htmlFor="email">Enter your name:</label>
          </div>
          <div>
            <input type="text" id="email" placeholder="Johndoe@gmail.com" />
          </div>
        </div>
        <button>Signup!</button>
      </form>
      <Users />
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
