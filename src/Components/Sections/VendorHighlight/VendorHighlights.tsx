// src/Components/Sections/VendorHighlight/VendorHighlights.tsx
import { Container, Typography } from '@mui/material';
import SliderComponent from './SliderComponent';

const VendorHighlights = () => {
  const slides = [
    { image: '/CreditUnion.png', title: 'CCCUL' },
    { image: '/FreshMarket.png', title: 'Fresh Market' },
    { image: '/SecretBay.png', title: 'Secret Bay' }
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ 
        fontWeight: 'bold', 
        mb: 6, 
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}>
        Sponsors
      </Typography>
      
      <SliderComponent slides={slides} />
    </Container>
  );
}

export default VendorHighlights;