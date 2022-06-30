import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";
import Input from "../common/Input";

function LoginComponent() {
  const navigate = useNavigate();
  return (
    <>
      <h1>LoginComponent</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Input
          type={"text"}
          label={"Username"}
          placeholder={"Input username here"}
        />
        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Input Password here"}
        />
        <Button
          label={"Login"}
          onClick={() => {
            navigate("/books");
          }}
        />
      </div>
    </>
  );
}

export default LoginComponent;
