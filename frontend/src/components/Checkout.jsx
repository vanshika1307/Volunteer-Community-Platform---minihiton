import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const cause = location.state?.cause;
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [amount, setAmount] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the payment processing
    console.log('Processing payment:', { amount, paymentMethod });
    // After successful payment, you could redirect or show a success message
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#FDF5E6' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Checkout
      </Typography>
      <Paper elevation={3} sx={{ padding: '2rem', maxWidth: 500, margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Donating to: {cause?.title || 'Selected Cause'}
          </Typography>
          <TextField
            fullWidth
            label="Donation Amount"
            variant="outlined"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup
              aria-label="payment-method"
              name="payment-method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
            </RadioGroup>
          </FormControl>
          {paymentMethod === 'card' && (
            <>
              <TextField fullWidth label="Card Number" variant="outlined" sx={{ mb: 2 }} required />
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField label="Expiry Date" variant="outlined" required />
                <TextField label="CVV" variant="outlined" type="password" required />
              </Box>
            </>
          )}
          {paymentMethod === 'upi' && (
            <TextField fullWidth label="UPI ID" variant="outlined" sx={{ mb: 2 }} required />
          )}
          {paymentMethod === 'netbanking' && (
            <TextField fullWidth label="Bank Name" variant="outlined" sx={{ mb: 2 }} required />
          )}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Process Payment
            </Button>
          </motion.div>
        </form>
      </Paper>
    </Box>
  );
};

export default Checkout;