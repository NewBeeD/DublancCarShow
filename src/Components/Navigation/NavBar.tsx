'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  // Explicitly type the anchorEl state as HTMLElement | null
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  // Add type annotation for the event parameter
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar 
        position="sticky"
        elevation={0}
        sx={{
          background: 'transparent',
          color: '#000',
        }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignContent: 'center'}}>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="basic-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              id="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'menu-button',
              }}
            >
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>Schedule</MenuItem>
              <MenuItem onClick={handleMenuClose}>Attractions</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
              <MenuItem onClick={handleMenuClose}>FAQs</MenuItem>
              <MenuItem onClick={handleMenuClose}>About</MenuItem>
            </Menu>
          </div>

          <Typography variant="h6" component="div">
            Car Show 2025
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}