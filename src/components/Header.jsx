// components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Checks for small screens

  return (
    <AppBar position="static" sx={{ backgroundColor: "#6a5acd" }}>
      <Toolbar>
        {!isSmallScreen && (
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Ozan Akgön
          </Typography>
        )}
        <Box sx={{ display: "flex", gap: "10px" }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
