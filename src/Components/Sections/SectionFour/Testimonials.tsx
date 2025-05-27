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



const Testimonials = () => {
 const testimonials = [
    { text: "The most insane car audio setups...", author: "@SpeedDemon91" },
    { text: "A paradise for gearheads...", author: "Automotive Weekly" }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
        What People Say
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={6} key={testimonial.author}>
            <Box sx={{ borderLeft: '4px solid #ff5722', pl: 3, py: 2 }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                "{testimonial.text}"
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                - {testimonial.author}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;


