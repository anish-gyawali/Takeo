import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";
import Input from "../common/Input";

function LoginComponent() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const login = () => {
    navigate("/books");
  };
  return (
    <>
      <div className="loginContainer">
        <h1>LoginComponent</h1>

        <Input
          type={"text"}
          label={"Username"}
          placeholder={"Input username here"}
          value={username}
          onChange={handleUsername}
        />
        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Input Password here"}
          value={password}
          onChange={handlePassword}
        />
        <Button label={"Login"} onClick={login} />
      </div>
    </>
  );
}

export default LoginComponent;
