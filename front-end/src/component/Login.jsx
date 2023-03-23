import axios from "axios";
import { useState } from "react";
export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
    const result = await axios.post("http://localhost:6060/login", {
      username,
      password,
    });
    console.log(result.data.success);
  }
  return (
    <div className="Login">
      <form action="/login" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
