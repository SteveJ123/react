import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Pets";
import { useLocation } from "react-router-dom";

const appNavBar = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          href="/"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        {location.pathname != "/signin" && (
          <Button color="inherit" href="/signin">
            Login
          </Button>
        )}
        {location.pathname != "/signup" && (
          <Button color="inherit" href="/signup">
            Signup
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default appNavBar;
