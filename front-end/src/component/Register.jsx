import axios from "axios";
import { useState } from "react";
import "../style/Register.css";

export default function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [createPassword, setCreatePassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username, email, createPassword);
    const result = await axios.post("http://localhost:6060/register", {
      username,
      email,
      createPassword,
    });
    console.log(result.body);
  }
  return (
    <div>
      <form
        className="form_container"
        action="/register"
        method="post"
        onSubmit={handleSubmit}
      >
        <label>
          username
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          email
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Create Password
          <input
            type="password"
            name="password"
            placeholder="Create password"
            onChange={(e) => setCreatePassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
