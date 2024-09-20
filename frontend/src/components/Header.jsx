import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  Container,
  useMediaQuery,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Brightness4, Brightness7, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../utils/ColorModeProvider";
import EventNotifications from "./EventNotifications";

const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen

  const [anchorEl, setAnchorEl] = useState(null); // Menu state for mobile
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Map", path: "/map" },
    { name: "Event Calendar", path: "/eventcalendar" },
    { name: "Community Dashboard", path: "/comdash" },
    { name: "Education Training", path: "/edu" },
    { name: "Donate", path: "/donate" },
    { name: "Checkout", path: "/checkout" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Register", path: "/register" },
    { name: "Volunteer Search", path: "/vol" },
    { name: "Login", path: "/login" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={headerVariants}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(45deg, #2A3EB1 30%, #4527A0 90%)"
              : "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1, justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {isMobile ? (
                <>
                  {/* Mobile Menu Button */}
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                  {/* Mobile Dropdown Menu */}
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    keepMounted
                  >
                    {navItems.map((item) => (
                      <MenuItem
                        key={item.name}
                        component={Link}
                        to={item.path}
                        onClick={handleMenuClose}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                /* Desktop Navigation */
                navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "inherit",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Dark/Light Mode Toggle */}
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              {/* Event Notifications */}
              <EventNotifications />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Header;
