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
  Button as MuiButton,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ColorModeContext } from "../utils/ColorModeProvider";
import EventNotifications from './EventNotifications';
import { Link } from "react-router-dom";

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
              {["Home", "Map", "EventCalender", "Contact"].map((item) => (
                <MuiButton
                  key={item}
                  component={Link}
                  to={`/${item.toLowerCase()}`}
                  color="inherit"
                  sx={{
                    ml: 2,
                    borderRadius: "20px",
                    px: 2,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item}
                </MuiButton>
              ))}
              {!isMobile && (
                <>
                  <MuiButton
                    component={Link}
                    to="/login"
                    color="inherit"
                    sx={{
                      ml: 2,
                      borderRadius: "20px",
                      px: 2,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Login
                  </MuiButton>
                  <MuiButton
                    component={Link}
                    to="/register"
                    color="inherit"
                    sx={{
                      ml: 2,
                      borderRadius: "20px",
                      px: 2,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Register
                  </MuiButton>
                </>
              )}
            </motion.nav>
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
                {theme.palette.mode === "dark" ? (
                  <Brightness7 />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>
            </motion.div>
            <motion.div variants={itemVariants}>
                <EventNotifications/>
            </motion.div>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Header;