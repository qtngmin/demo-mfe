import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }} sx={{ ml: 15 }}>
      <Paper elevation={3} style={{ padding: '30px' }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Box marginBottom={2}>
          <Typography variant="body1">
            We are a leading company in the industry, committed to providing the best service and products to our customers.
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography variant="body1">
            Our team is composed of dedicated professionals who work tirelessly to ensure customer satisfaction.
          </Typography>
        </Box>
        <Typography variant="body1">
          Contact us for more information about our products and services.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
