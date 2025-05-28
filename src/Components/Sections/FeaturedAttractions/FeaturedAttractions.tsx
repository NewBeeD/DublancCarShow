
import {
  Container,
  Typography,

} from '@mui/material';


import SliderComponent from '../VendorHighlight/SliderComponent';






const FeaturedAttractions = () => {


    const slides = [
    { image: '/Bados1.png', title: 'CCCUL' },
    { image: '/Bados2.png', title: 'Fresh Market' },
    { image: '/Bados3.png', title: 'Secret Bay' },
    { image: '/Bados4.png', title: 'Secret Bay' },
  ];  


  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ 
        fontWeight: 'bold', 
        mb: 6, 
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}>
        Featured Attractions
      </Typography>
      
      <SliderComponent slides={slides} />
    </Container>
  );
}

export default FeaturedAttractions;






