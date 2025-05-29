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
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // New: Only close the menu (no navigation)
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
              {/* Updated: Use navigation handler for items */}
              <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
              <MenuItem onClick={() => router.push('/about')}>About</MenuItem>
              <MenuItem onClick={() => router.push('/registration')}>Registration</MenuItem>
              <MenuItem onClick={() => router.push('/briefing')}>Briefing</MenuItem>
            </Menu>
          </div>

          <Typography variant="h6" component="div">
            DriveFest
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}