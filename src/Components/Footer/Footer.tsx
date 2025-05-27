import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  TextField,
  Box,
  Link
} from '@mui/material';
import {
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon,
  EmojiEvents,
  DirectionsCar,
  VolumeUp,
  EventAvailable,
  Instagram,
  Facebook,
  Twitter
} from '@mui/icons-material';




const Footer = () => {
  return (
      <Box sx={{ bgcolor: '#2d2d2d', color: 'white', py: 6 }}>
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Typography variant="body2">Email: info@autosonic.com</Typography>
          <Typography variant="body2">Phone: (555) 123-4567</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box>
            <IconButton color="inherit"><Instagram /></IconButton>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Partners</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['partner1', 'partner2'].map((partner) => (
              <Avatar key={partner} src={`/${partner}-logo.png`} variant="square" />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
}

export default Footer;



