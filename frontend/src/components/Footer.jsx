import React from 'react';
import { motion } from 'framer-motion';
import { Typography, useTheme, Container, Grid, Link, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20,
        duration: 0.8,
        delay: 0.2
      }
    }
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
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      style={{
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
        borderRadius: '20px 20px 0 0',
        padding: '2rem 0',
        marginTop: '2rem'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <motion.div variants={itemVariants}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We are XYZ company, dedicated to providing the best service to our customers.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div variants={itemVariants}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                123 Main Street, Anytown, USA 12345<br />
                Email: info@example.com<br />
                Phone: +1 234 567 8901
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div variants={itemVariants}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://facebook.com" color="inherit">
                <Facebook />
              </Link>
              <Link href="https://twitter.com" color="inherit" sx={{ pl: 1, pr: 1 }}>
                <Twitter />
              </Link>
              <Link href="https://instagram.com" color="inherit">
                <Instagram />
              </Link>
            </motion.div>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </motion.footer>
  );
};

export default Footer;