import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

import {
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon,
  EmojiEvents,
  DirectionsCar,
  VolumeUp,

} from '@mui/icons-material';



const WhyAttend = () => {
  return (
    <Container sx={{ py: 8 }}>
    <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
      Why Attend?
    </Typography>
    <Grid container spacing={4}>
      {[
        { icon: <DirectionsCar fontSize="large" />, title: 'Custom Rides', text: 'See 100+ jaw-dropping builds...' },
        { icon: <VolumeUp fontSize="large" />, title: 'Bass Arena', text: 'Feel the beat in our Sound Showdown...' },
        { icon: <EmojiEvents fontSize="large" />, title: 'Competitions', text: 'Watch builders battle for awards...' }
      ].map((item) => (
        <Grid item xs={12} md={4} key={item.title}>
          <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Box sx={{ color: '#ff5722', mb: 2 }}>{item.icon}</Box>
              <Typography variant="h6" gutterBottom>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.text}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
}

export default WhyAttend;