import { useState } from "react";
import { useDispatch } from "react-redux";
import {loginApiAction} from "./actions"
import { Box, Button, TextField } from "@mui/material";
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

// type LoginProps={
//   manager:boolean;
// }

interface LoginProps {
  manager: boolean;
  handleDialogClose: () => void;
}

interface LoginModel {
  contact: string;
  password?: string;
}
const Login = ({ manager, handleDialogClose }: LoginProps) => {
  const [data, setData] = useState<LoginModel>({} as LoginModel);
  const dispatch=useDispatch();
  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const doLogin = async () => {
    dispatch(await loginApiAction(LOGIN, data))
  };
  return (
    <Box sx={styles.wrapper}>
      <TextField
        name="contact"
        required
        id="outlined-required"
        label="Contact"
        sx={styles.input}
        value={data.contact}
        onChange={handleInput}
      />
      {manager && (
        <TextField
          name="password"
          id="outlined-disabled"
          label="Password"
          type="password"
          value={data.password}
          onChange={handleInput}
          sx={styles.input}
        />
      )}
      <Box sx={styles.btnWrapper}>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button onClick={doLogin} sx={{ ml: 5 }} variant="contained">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
