
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


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const FeaturedAttractions = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box sx={{ bgcolor: '#1a1a1a', py: 8 }}>
      
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: 'white' }}>
          Featured Attractions
        </Typography>
        <Slider {...sliderSettings}>
          {[
            { image: '/vr-booth.jpg', title: 'VR Car Customizer' },
            { image: '/celebrity-builder.jpg', title: 'Meet Celebrity Builder' },
            { image: '/kid-zone.jpg', title: 'Family Activities' }
          ].map((item) => (
            <Box key={item.title} sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: 'rgba(0,0,0,0.6)',
                color: 'white',
                p: 3
              }}>
                <Typography variant="h5">{item.title}</Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
      
    </Box>
  );
}

export default FeaturedAttractions;






