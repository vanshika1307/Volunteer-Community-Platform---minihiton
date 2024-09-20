import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent, CardActions, Grid, Modal, Fade } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const causes = [
  { id: 1, title: 'Flood Relief', description: 'Help provide essential supplies to flood victims.', goal: 10000, raised: 7500 },
  { id: 2, title: 'Disaster Recovery', description: 'Support recovery efforts after natural disasters.', goal: 15000, raised: 9000 },
  { id: 3, title: 'Wildfire Relief', description: 'Aid those affected by wildfires.', goal: 12000, raised: 6000 },
];

const DonationPage = () => {
  const navigate = useNavigate();
  const [selectedCause, setSelectedCause] = useState(null);
  
  const handleOpenModal = (cause) => {
    setSelectedCause(cause);
  };

  const handleCloseModal = () => {
    setSelectedCause(null);
  };

  const handleDonate = () => {
    navigate('/checkout', { state: { cause: selectedCause } });
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#FDF5E6' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Choose a Cause to Donate
      </Typography>
      <Grid container spacing={4}>
        {causes.map((cause) => (
          <Grid item xs={12} sm={6} md={4} key={cause.id}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{cause.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{cause.description}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Goal: ${cause.goal.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Raised: ${cause.raised.toLocaleString()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleOpenModal(cause)}>Learn More</Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={Boolean(selectedCause)}
        onClose={handleCloseModal}
        closeAfterTransition
      >
        <Fade in={Boolean(selectedCause)}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}>
            {selectedCause && (
              <>
                <Typography variant="h5" gutterBottom>{selectedCause.title}</Typography>
                <Typography variant="body1" paragraph>{selectedCause.description}</Typography>
                <Typography variant="body2" paragraph>
                  Goal: ${selectedCause.goal.toLocaleString()}<br />
                  Raised: ${selectedCause.raised.toLocaleString()}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleDonate} fullWidth>
                  Donate Now
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default DonationPage;