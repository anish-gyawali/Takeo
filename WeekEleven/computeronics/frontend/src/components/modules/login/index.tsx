import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{display:'flex', margin:'20px', flexDirection:'column'}}>
      <Typography variant='h4' gutterBottom>Login</Typography>
      <TextField required id="outlined-required" label="Username"  sx={{marginBottom:'20px'}}/>
      <TextField id="outlined-disabled" label="Password" type="password" sx={{marginBottom:'20px'}}/>
      <Box  sx={{display:'flex',justifyContent:'space-evenly'}}>
      <Button variant="contained">Login</Button>
      <Button variant="contained">Cancel</Button>
      </Box>
    </Box>
  );
};

export default Login;