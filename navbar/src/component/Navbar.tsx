import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 120,
          boxSizing: 'border-box',
        },
        borderRadius: 4
      }}
    >
      <List>
        <ListItem component={Link} to="/product">
          <ListItemText primary="Product" />
        </ListItem>
        <ListItem component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem component={Link} to="/welcome">
          <ListItemText primary="Welcome" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
