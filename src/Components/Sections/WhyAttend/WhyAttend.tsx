import { Container, Typography, Box, Card, CardContent, Stack } from '@mui/material';
import { DirectionsCar, VolumeUp, EmojiEvents } from '@mui/icons-material';

const WhyAttend = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
        Why Attend?
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="stretch"
        sx={{ 
          '& > *': {
            flex: 1,
            minWidth: { md: '30%' }
          }
        }}
      >
        {[
          { icon: <DirectionsCar fontSize="large" />, title: 'Custom Rides', text: 'See 100+ jaw-dropping builds...' },
          { icon: <VolumeUp fontSize="large" />, title: 'Bass Arena', text: 'Feel the beat in our Sound Showdown...' },
          { icon: <EmojiEvents fontSize="large" />, title: 'Competitions', text: 'Watch builders battle for awards...' }
        ].map((item) => (
          <Box key={item.title}>
            <Card sx={{ 
              height: '100%', 
              transition: 'transform 0.3s', 
              '&:hover': { transform: 'scale(1.02)' } 
            }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ color: '#ff5722', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" gutterBottom>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.text}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export default WhyAttend;