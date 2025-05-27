import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Avatar
} from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#2d2d2d', color: 'white', py: 6 }}>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          justifyContent="space-between"
        >


          {/* Contact Section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2">Email: info@autosonic.com</Typography>
            <Typography variant="body2">Phone: (555) 123-4567</Typography>
          </Box>

          {/* Social Media Section */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit"><Instagram /></IconButton>
              <IconButton color="inherit"><Facebook /></IconButton>
              <IconButton color="inherit"><Twitter /></IconButton>
            </Stack>
          </Box>

          {/* Partners Section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>Partners</Typography>
            <Stack direction="row" spacing={2}>
              {['partner1', 'partner2'].map((partner) => (
                <Avatar 
                  key={partner} 
                  src={`/${partner}-logo.png`} 
                  variant="square"
                  sx={{ width: 80, height: 80 }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;