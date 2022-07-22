import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div>
      <TextField required id="outlined-required" label="Username" />
      <TextField id="outlined-disabled" label="Password" type="password" />
      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;
