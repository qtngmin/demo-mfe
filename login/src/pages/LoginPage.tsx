import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    console.log('Login attempted with:', { email, password });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ ml: 15 }}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px' }}>
        <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '15px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          style={{ marginBottom: '20px' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
