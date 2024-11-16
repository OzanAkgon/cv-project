import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#6a5acd" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ozan Akgön
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Anasayfa
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Projeler
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Hakkımda
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          İletişim
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
