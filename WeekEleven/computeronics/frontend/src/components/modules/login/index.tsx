import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

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
  username: string;
  password: string;
}
const Login = ({ manager, handleDialogClose }: LoginProps) => {
  const [data, setData] = useState<LoginModel>({} as LoginModel);

  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const doLogin = () => {
    console.log(data);
  };
  return (
    <Box sx={styles.wrapper}>
      <TextField
        name="username"
        required
        id="outlined-required"
        label="Username"
        sx={styles.input}
        value={data.username}
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
