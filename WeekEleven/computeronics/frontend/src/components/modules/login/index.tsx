import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{display:'flex', width:'20%',margin:'20px', flexDirection:'column'}}>
      <TextField required id="outlined-required" label="Username"  sx={{marginBottom:'20px'}}/>
      <TextField id="outlined-disabled" label="Password" type="password" sx={{marginBottom:'20px'}}/>
      <Button variant="contained">Login</Button>
    </Box>
  );
};

export default Login;