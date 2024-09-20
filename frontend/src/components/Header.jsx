import React from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../utils/ColorModeProvider";
import EventNotifications from "./EventNotifications";

const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

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
          <Toolbar disableGutters sx={{ py: 1 }}>
            <motion.div variants={itemVariants} style={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", letterSpacing: 1 }}
              >
                YourLogo
              </Typography>
            </motion.div>
            <motion.nav
              variants={itemVariants}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {[
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
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: 16,
                    borderRadius: 20,
                    padding: "8px 16px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
            {!isMobile && (
              <>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: 16,
                    borderRadius: 20,
                    padding: "8px 16px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: 16,
                    borderRadius: 20,
                    padding: "8px 16px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Register
                </Link>
              </>
            )}
            <motion.div variants={itemVariants}>
              <IconButton
                sx={{
                  ml: 2,
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
            </motion.div>
            <motion.div variants={itemVariants}>
              <EventNotifications />
            </motion.div>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Header;
