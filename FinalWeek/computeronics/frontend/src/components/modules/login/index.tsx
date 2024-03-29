import React from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { loginApiAction } from "./actions";
import { LOGIN } from "../../../api/urls";

const styles = {
  wrapper: {
    display: "flex",
    margin: "20px",
    flexDirection: "column",
  },
  input: {
    marginBottom: "20px",
    width: 400,
  },
  btnWrapper: {
    display: "flex",
    margin: "20px",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
};

interface LoginProps {
  manager: boolean;
  handleDialogClose: () => void;
}

interface LoginModel {
  contact: string;
  password?: string;
}
const Login = ({ manager, handleDialogClose }: LoginProps) => {
  const [data, setData] = React.useState<LoginModel>({} as LoginModel);
  const dispatch = useDispatch();
  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const doLogin = async () => {
    dispatch(loginApiAction(LOGIN, data));
  };
  return (
    <Box sx={styles.wrapper}>
      <TextField
        required
        name="contact"
        id="outlined-required"
        label="Contact"
        sx={styles.input}
        value={data.contact}
        onChange={handleInput}
      />
      {manager && (
        <TextField
          id="outlined-disabled"
          label="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleInput}
          sx={styles.input}
        />
      )}
      <Box sx={styles.btnWrapper}>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button sx={{ ml: 5 }} variant="contained" onClick={doLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
