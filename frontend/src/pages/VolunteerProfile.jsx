import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Card, CardContent, CardActions, Typography, Chip, 
  Grid, Button, TextField, Box, useTheme
} from '@mui/material';
import { 
  Email, EmojiEvents, AccessTime, 
  CalendarToday, LocationOn, Favorite, Star
} from '@mui/icons-material';

// Mock data for volunteers
const volunteers = [
  { 
    id: 1, 
    name: 'Jane Doe', 
    email: 'jane.doe@example.com', 
    credits: 150,
    hours: 75,
    events: 12,
    location: 'New York, NY',
    interests: ['Education', 'Environment'],
    badge: 'Silver'
  },
  { 
    id: 2, 
    name: 'John Smith', 
    email: 'john.smith@example.com', 
    credits: 80,
    hours: 40,
    events: 8,
    location: 'Los Angeles, CA',
    interests: ['Healthcare', 'Animal Welfare'],
    badge: 'Bronze'
  },
  { 
    id: 3, 
    name: 'Alice Johnson', 
    email: 'alice.johnson@example.com', 
    credits: 220,
    hours: 110,
    events: 18,
    location: 'Chicago, IL',
    interests: ['Poverty Alleviation', 'Education'],
    badge: 'Gold'
  },
  { 
    id: 4, 
    name: 'Bob Wilson', 
    email: 'bob.wilson@example.com', 
    credits: 175,
    hours: 87,
    events: 14,
    location: 'Houston, TX',
    interests: ['Youth Development', 'Sports'],
    badge: 'Silver'
  },
  { 
    id: 5, 
    name: 'Emma Brown', 
    email: 'emma.brown@example.com', 
    credits: 300,
    hours: 150,
    events: 25,
    location: 'San Francisco, CA',
    interests: ['Technology', 'Arts'],
    badge: 'Platinum'
  },
  { 
    id: 6, 
    name: 'Michael Lee', 
    email: 'michael.lee@example.com', 
    credits: 90,
    hours: 45,
    events: 9,
    location: 'Seattle, WA',
    interests: ['Environmental Conservation', 'Community Development'],
    badge: 'Bronze'
  },
  { 
    id: 7, 
    name: 'Sarah Davis', 
    email: 'sarah.davis@example.com', 
    credits: 260,
    hours: 130,
    events: 22,
    location: 'Boston, MA',
    interests: ['Education', 'Mental Health'],
    badge: 'Gold'
  },
  { 
    id: 8, 
    name: 'David Martinez', 
    email: 'david.martinez@example.com', 
    credits: 120,
    hours: 60,
    events: 10,
    location: 'Miami, FL',
    interests: ['Elderly Care', 'Disaster Relief'],
    badge: 'Silver'
  },
  { 
    id: 9, 
    name: 'Olivia Taylor', 
    email: 'olivia.taylor@example.com', 
    credits: 350,
    hours: 175,
    events: 30,
    location: 'Denver, CO',
    interests: ['Youth Mentoring', 'Women Empowerment'],
    badge: 'Platinum'
  },
  { 
    id: 10, 
    name: 'James Anderson', 
    email: 'james.anderson@example.com', 
    credits: 200,
    hours: 100,
    events: 16,
    location: 'Phoenix, AZ',
    interests: ['Homelessness', 'Veteran Support'],
    badge: 'Gold'
  }
];

const badgeColors = {
  Bronze: '#CD7F32',
  Silver: '#C0C0C0',
  Gold: '#FFD700',
  Platinum: '#E5E4E2'
};

const VolunteerProfile = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBadge, setSelectedBadge] = useState(null);

  const filteredVolunteers = volunteers.filter(volunteer => 
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedBadge || volunteer.badge === selectedBadge)
  );

  return (
    <Box sx={{ 
      bgcolor: theme.palette.background.default, 
      minHeight: '100vh', 
      py: 4 
    }}>
      <Typography variant="h3" align="center" gutterBottom>
        Volunteer Profiles
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <TextField
          label="Search Volunteers"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300, mr: 2 }}
        />
        <Button
          variant={selectedBadge === null ? "contained" : "outlined"}
          onClick={() => setSelectedBadge(null)}
          sx={{ mr: 1 }}
        >
          All
        </Button>
        {Object.keys(badgeColors).map((badge) => (
          <Button
            key={badge}
            variant={selectedBadge === badge ? "contained" : "outlined"}
            onClick={() => setSelectedBadge(badge)}
            sx={{ 
              mr: 1,
              bgcolor: selectedBadge === badge ? badgeColors[badge] : 'transparent',
              color: selectedBadge === badge ? 'white' : badgeColors[badge],
              '&:hover': {
                bgcolor: badgeColors[badge],
                color: 'white',
              }
            }}
          >
            {badge}
          </Button>
        ))}
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {filteredVolunteers.map((volunteer) => (
          <Grid item key={volunteer.id} xs={12} sm={6} md={4} lg={3}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <CardContent sx={{ pt: 5 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {volunteer.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ mr: 1, fontSize: 18 }} />
                    {volunteer.email}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                    <EmojiEvents sx={{ mr: 1, fontSize: 18, color: theme.palette.warning.main }} />
                    Credits: {volunteer.credits}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                    <AccessTime sx={{ mr: 1, fontSize: 18, color: theme.palette.info.main }} />
                    Hours: {volunteer.hours}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                    <CalendarToday sx={{ mr: 1, fontSize: 18, color: theme.palette.success.main }} />
                    Events: {volunteer.events}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ mr: 1, fontSize: 18, color: theme.palette.error.main }} />
                    {volunteer.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                    <Favorite sx={{ mr: 1, fontSize: 18, color: theme.palette.secondary.main }} />
                    Interests:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {volunteer.interests.map((interest, index) => (
                      <Chip key={index} label={interest} size="small" />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
                  <Button size="small" startIcon={<Star />}>View Profile</Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VolunteerProfile;