import { Box, Typography, Grid, Button, IconButton, Container } from '@mui/material';
import { DirectionsCar, MusicNote, Brush, EmojiEvents, Groups, Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 900, color: 'primary.main' }}>
            Dublanc DriveFest
          </Typography>
          <Typography variant="h5" color="text.secondary" mb={4}>
            August 31st, 2025 | Almond Park, Dublanc
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto' }}>
            Where Automotive Passion Meets Island Vibes
          </Typography>
        </Box>

        {/* Event Description */}
        <Box mb={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Fueling Caribbean Car Culture
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                Born from the roaring engines of passion and the rhythmic beats of Dominica's heart, 
                Dublanc DriveFest has evolved into the Caribbean's premier automotive celebration. 
                What began as a local meetup has accelerated into a full-throttle festival of 
                mechanical artistry and sonic innovation.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                More Than Just Metal
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                We're a moving canvas where custom paint jobs tell stories, basslines become heartbeats, 
                and engine roars harmonize with island rhythms. From jaw-dropping lowriders to 
                earth-shaking sound systems, every element is a tribute to automotive creativity.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Event Highlights */}
        <Box mb={10}>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 900 }}>
            Festival Pillars
          </Typography>
          <Grid container spacing={4}>
            {[
              { icon: <DirectionsCar fontSize="large" />, title: 'Custom Builds', text: '200+ Bespoke Vehicles' },
              { icon: <MusicNote fontSize="large" />, title: 'Sound Wars', text: '50,000W+ Systems' },
              { icon: <Brush fontSize="large" />, title: 'Design Showdown', text: 'Award-Winning Artists' },
              { icon: <EmojiEvents fontSize="large" />, title: 'Competitions', text: '15 Trophy Categories' },
              { icon: <Groups fontSize="large" />, title: 'Community', text: '10,000+ Enthusiasts' },
            ].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Box sx={{ 
                  p: 4, 
                  border: '2px solid', 
                  borderColor: 'divider', 
                  borderRadius: 2,
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  }
                }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h5" gutterBottom>{item.title}</Typography>
                  <Typography color="text.secondary">{item.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Organizers Section */}
        <Box textAlign="center" mb={10}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 900 }}>
            Powered By Passion
          </Typography>
          <Typography variant="h5" color="text.secondary" mb={4}>
            Dublanc Football Club & Ellen Hurst Present
          </Typography>
          <Typography paragraph sx={{ maxWidth: 800, mx: 'auto', fontSize: '1.1rem' }}>
            What happens when sports passion meets automotive obsession? A festival that revs beyond 
            boundaries. Our unlikely alliance fuels an event where community spirit and mechanical 
            mastery collide in spectacular fashion.
          </Typography>
        </Box>

        {/* CTA Section */}
        <Box textAlign="center">
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              px: 6, 
              py: 2, 
              fontSize: '1.2rem',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            Register Today
          </Button>
          
          <Box mt={4}>
            <IconButton color="primary" sx={{ mx: 1 }}>
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton color="primary" sx={{ mx: 1 }}>
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton color="primary" sx={{ mx: 1 }}>
              <Twitter fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}