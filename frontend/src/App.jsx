import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ColorModeProvider from './utils/ColorModeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <ColorModeProvider>
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'background-color 0.3s, color 0.3s',
      }}>
        <BrowserRouter>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </Box>
    </ColorModeProvider>
  );
};

export default App;