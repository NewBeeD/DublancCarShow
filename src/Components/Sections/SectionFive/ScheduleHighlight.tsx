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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ScheduleHighlight = () => {
  return (
      <Box sx={{ bgcolor: '#f5f5f5', }}>
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
        Event Schedule
      </Typography>
      <List sx={{ maxWidth: 600, margin: '0 auto' }}>
        {[
          { day: 'Friday', time: '6 PM - 10 PM', event: 'VIP Preview Night' },
          { day: 'Saturday', time: '10 AM - 8 PM', event: 'Main Show & Competitions' },
          { day: 'Sunday', time: '9 AM - 5 PM', event: 'Family Day' }
        ].map((item) => (
          <ListItem key={item.day} sx={{ bgcolor: 'white', mb: 2, borderRadius: 2 }}>
            <ListItemIcon sx={{ color: '#ff5722' }}>
              <EventAvailable />
            </ListItemIcon>
            <ListItemText
              primary={item.event}
              secondary={`${item.day} • ${item.time}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  </Box>
  );
}

export default ScheduleHighlight;




