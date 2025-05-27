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


const VendorHighlights = () => {
  return (
      <Container sx={{ py: 8 }}>
    <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
      Featured Brands
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {['alpine', 'pioneer', 'jbl', 'sony'].map((brand) => (
        <Grid item key={brand}>
          <Avatar
            src={`/${brand}-logo.png`}
            sx={{ width: 120, height: 120, bgcolor: 'white', p: 2 }}
            variant="square"
          />
        </Grid>
      ))}
    </Grid>
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Button variant="outlined" color="warning" size="large">
        Become an Exhibitor
      </Button>
    </Box>
  </Container>
  );
}

export default VendorHighlights;



