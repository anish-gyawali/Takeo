import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handelUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <div className="container">
      <span>{user.name}</span>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handelUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button disabled={!username || !password} onClick={handleSubmit}>
          {loading ? "please wait" : "Login"}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          {"Something went wrong!! "}
        </span>
      </form>
    </div>
  );
};
export default Login;
