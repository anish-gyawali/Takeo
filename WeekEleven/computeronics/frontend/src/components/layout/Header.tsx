import  React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import MoreIcon from "@mui/icons-material/MoreVert";

import Login from "../modules/login";
import { logoutSuccessAction } from "../modules/login/actions";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorLogin, setAnchorLogin] =useState<null | HTMLElement>(null);
  const [isModelOpen, setIsModelOpen] =useState<boolean>(false);
  const [isManagerClicked, setIsManagerClicked] = React.useState<boolean>(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const userData = useSelector((state: any) => state?.loginData);
  const dispatch=useDispatch();
  const isMenuOpen = Boolean(anchorEl);
  const isLoginMenuOpen = Boolean(anchorLogin);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLoginMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLogin(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleLoginMenuClose = () => {
    setAnchorLogin(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    handleLoginMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleDialogClose = () => {
    setIsModelOpen(false);
  };


  const doLogout=()=>{
    localStorage.clear();
    handleMenuClose()
    dispatch(logoutSuccessAction())
  };

  useEffect(() => {
    if(userData?._id){
      setIsModelOpen(false);
    }
  }, [userData]);
  
  const menuId = "primary-search-account-menu";
  const menuLoginId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Account</MenuItem>
      <MenuItem onClick={doLogout}>Logout</MenuItem>
    </Menu>
  );

  const handleCustomerAction = () => {
    setIsModelOpen(true);
    setIsManagerClicked(false);
    handleMenuClose();
  };
  const handleManagerAction = () => {
    setIsModelOpen(true);
    setIsManagerClicked(true);
    handleMenuClose();
  };

  const renderLoginMenu = (
    <Menu
      anchorEl={anchorLogin}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuLoginId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isLoginMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleCustomerAction}>Customer</MenuItem>
      <MenuItem onClick={handleManagerAction}>Manager</MenuItem> 
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LoginIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Computeronics
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {userData?._id ? (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            ) : (
              <Button variant="contained" onClick={handleLoginMenuOpen}>
                Login
              </Button>
            )}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        {renderLoginMenu}
      </Box>
      <Dialog open={isModelOpen} onClose={handleDialogClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Login
            manager={isManagerClicked}
            handleDialogClose={handleDialogClose}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
