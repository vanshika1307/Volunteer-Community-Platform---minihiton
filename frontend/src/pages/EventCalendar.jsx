import React, { useState, useEffect } from 'react';
import { 
  Container, Paper, Typography, Grid, Button, 
  FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const mockOpportunities = [
  {
    id: 1,
    title: "Beach Cleanup Drive",
    description: "Join us in cleaning up Juhu Beach and protecting marine life.",
    location: "Mumbai",
    state: "Maharashtra",
    cause: "Environment",
    date: "2024-10-15",
    organization: "Clean Seas India",
    latitude: 19.0948,
    longitude: 72.8258
  },
  {
    id: 2,
    title: "Teach English to Underprivileged Children",
    description: "Help children improve their English skills at a local community center.",
    location: "Pune",
    state: "Maharashtra",
    cause: "Education",
    date: "2024-10-20",
    organization: "Literacy for All",
    latitude: 18.5204,
    longitude: 73.8567
  },
  {
    id: 3,
    title: "Food Distribution for the Homeless",
    description: "Distribute meals to homeless individuals in the city center.",
    location: "Mumbai",
    state: "Maharashtra",
    cause: "Hunger",
    date: "2024-10-25",
    organization: "Feeding Hope",
    latitude: 19.0760,
    longitude: 72.8777
  },
  {
    id: 4,
    title: "Tree Planting Initiative",
    description: "Help increase green cover by planting trees in urban areas.",
    location: "Nagpur",
    state: "Maharashtra",
    cause: "Environment",
    date: "2024-11-05",
    organization: "Green Maharashtra",
    latitude: 21.1458,
    longitude: 79.0882
  },
  {
    id: 5,
    title: "Elder Care Assistance",
    description: "Spend time with elderly residents at a local care home.",
    location: "Mumbai",
    state: "Maharashtra",
    cause: "Elderly Care",
    date: "2024-11-10",
    organization: "Silver Years Foundation",
    latitude: 19.1136,
    longitude: 72.8697
  },
  {
    id: 6,
    title: "Rural Health Camp",
    description: "Provide basic health check-ups and awareness in rural areas.",
    location: "Aurangabad",
    state: "Maharashtra",
    cause: "Healthcare",
    date: "2024-11-15",
    organization: "Rural Health Initiative",
    latitude: 19.8762,
    longitude: 75.3433
  },
  {
    id: 7,
    title: "Literacy Drive in Slums",
    description: "Teach basic reading and writing skills to children in urban slums.",
    location: "Delhi",
    state: "Delhi",
    cause: "Education",
    date: "2024-11-20",
    organization: "Educate India",
    latitude: 28.7041,
    longitude: 77.1025
  },
  {
    id: 8,
    title: "Mangrove Conservation Project",
    description: "Help preserve the coastal ecosystem by planting mangroves.",
    location: "Ratnagiri",
    state: "Maharashtra",
    cause: "Environment",
    date: "2024-11-25",
    organization: "Coastal Conservation Society",
    latitude: 16.9902,
    longitude: 73.3120
  },
  {
    id: 9,
    title: "Street Animal Care",
    description: "Provide food and basic medical care to street animals.",
    location: "Bengaluru",
    state: "Karnataka",
    cause: "Animal Welfare",
    date: "2024-12-01",
    organization: "Street Paws",
    latitude: 12.9716,
    longitude: 77.5946
  },
  {
    id: 10,
    title: "Women's Skill Development Workshop",
    description: "Teach tailoring and handicraft skills to underprivileged women.",
    location: "Kolhapur",
    state: "Maharashtra",
    cause: "Women Empowerment",
    date: "2024-12-05",
    organization: "Empowered Women India",
    latitude: 16.7050,
    longitude: 74.2433
  }
];


const EventCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState(mockOpportunities);
  const [filterCause, setFilterCause] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  const causes = [...new Set(mockOpportunities.map(op => op.cause))];
  const locations = [...new Set(mockOpportunities.map(op => op.location))];

  useEffect(() => {
    setFilteredEvents(mockOpportunities.filter(op => 
      (!filterCause || op.cause === filterCause) &&
      (!filterLocation || op.location === filterLocation)
    ));
  }, [filterCause, filterLocation]);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const addToCalendar = (event) => {
    const { title, description, date, location } = event;
    const startTime = new Date(date).toISOString();
    const endTime = new Date(new Date(date).setHours(new Date(date).getHours() + 2)).toISOString();

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${startTime.replace(/[-:]/g, '')}/${endTime.replace(/[-:]/g, '')}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Volunteer Opportunities Calendar
      </Typography>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Filter by Cause</InputLabel>
            <Select
              value={filterCause}
              onChange={(e) => setFilterCause(e.target.value)}
            >
              <MenuItem value="">All Causes</MenuItem>
              {causes.map(cause => (
                <MenuItem key={cause} value={cause}>{cause}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Filter by Location</InputLabel>
            <Select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <MenuItem value="">All Locations</MenuItem>
              {locations.map(location => (
                <MenuItem key={location} value={location}>{location}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Button onClick={handlePrevMonth}>&lt; Prev</Button>
          <Typography variant="h5">
            {format(currentMonth, 'MMMM yyyy')}
          </Typography>
          <Button onClick={handleNextMonth}>Next &gt;</Button>
        </Grid>
        <Grid container spacing={1}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <Grid item xs={1.7} key={day}>
              <Typography align="center" fontWeight="bold">{day}</Typography>
            </Grid>
          ))}
          {daysInMonth.map((day, index) => (
            <Grid item xs={1.7} key={day.toString()}>
              <Paper 
                elevation={1} 
                style={{ 
                  height: '100px', 
                  overflow: 'auto', 
                  padding: '5px',
                  backgroundColor: day.getMonth() !== currentMonth.getMonth() ? '#f0f0f0' : 'white'
                }}
              >
                <Typography align="center">{format(day, 'd')}</Typography>
                <AnimatePresence>
                  {filteredEvents
                    .filter(event => format(parseISO(event.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
                    .map(event => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Typography variant="caption" display="block" noWrap>
                          {event.title}
                        </Typography>
                        <Button 
                          variant="outlined" 
                          size="small" 
                          fullWidth
                          onClick={() => addToCalendar(event)}
                        >
                          Add to Calendar
                        </Button>
                      </motion.div>
                    ))
                  }
                </AnimatePresence>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default EventCalendar;