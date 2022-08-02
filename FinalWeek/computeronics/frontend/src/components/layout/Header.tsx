import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Login from "../modules/login";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { logoutSuccessAction } from "../modules/login/actions";

interface HeaderProps {
  setIsModelOpen: any;
  isModelOpen: boolean;
}

export default function PrimarySearchAppBar({
  setIsModelOpen,
  isModelOpen,
}: HeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorLoginEl, setAnchorLoginEl] = React.useState<null | HTMLElement>(
    null
  );

  const userData = useSelector((state: any) => state?.loginData);
  const dispatch = useDispatch();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [isManagerClicked, setIsManagerClicked] =
    React.useState<boolean>(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLoginMenuOpen = Boolean(anchorLoginEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLoginEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleLoginMenuClose = () => {
    setAnchorLoginEl(null);
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
  const doLogout = () => {
    localStorage.clear();
    handleMenuClose();
    dispatch(logoutSuccessAction());
  };
  React.useEffect(() => {
    if (userData?._id) {
      setIsModelOpen(false);
    }
  }, [userData]);
  
  const menuId = "primary-search-account-menu";
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
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
  const menuLoginId = "primary-search-login-menu";
  const renderLoginMenu = (
    <Menu
      anchorEl={anchorLoginEl}
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

  const mobileMenuId = "primary-search-account-menu-mobile";
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
          <AccountCircle />
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
