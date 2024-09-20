import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const videoList = [
  { title: 'Community Beach Cleanup', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Volunteer Training Workshop', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

const achievements = [
  { title: 'Trees Planted', count: 10000 },
  { title: 'Meals Served', count: 50000 },
  { title: 'Volunteers Trained', count: 5000 },
];

const EducationTraining = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#FDF5E6' }}>
      <Typography variant="h4" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} gutterBottom>
        Community Impact
      </Typography>
      
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Our Achievements</Typography>
      <Grid container spacing={4} sx={{ marginBottom: '2rem' }}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Paper elevation={3} sx={{ padding: '1rem', textAlign: 'center' }}>
                <Typography variant="h6">{achievement.title}</Typography>
                <Typography variant="h4" color="primary">{achievement.count.toLocaleString()}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom>Community Service Videos</Typography>
      <Grid container spacing={4}>
        {videoList.map((video, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card>
                <CardMedia
                  component="iframe"
                  height="315"
                  src={video.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <CardContent>
                  <Typography variant="h6">{video.title}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EducationTraining;