import { Box, Typography, Button, IconButton, Container, Stack } from '@mui/material';
import { DirectionsCar, MusicNote, Brush, EmojiEvents, Groups, Facebook, Instagram, Twitter } from '@mui/icons-material';

import Link from 'next/link';

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
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={6}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Fueling Caribbean Car Culture
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                Born from the roaring engines of passion and the rhythmic beats of Dominica's heart, 
                Dublanc DriveFest has evolved into the Caribbean's premier automotive celebration. 
                What began as a local meetup has accelerated into a full-throttle festival of 
                mechanical artistry and sonic innovation.
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                More Than Just Metal
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                We're a moving canvas where custom paint jobs tell stories, basslines become heartbeats, 
                and engine roars harmonize with island rhythms. From show-stopping custom builds to 
                earth-shaking sound systems, every element is a tribute to automotive creativity in Dominica.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* NEW: Competition Categories Section */}
        <Box mb={10}>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 900 }}>
            Competition Categories
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
            {/* Sound Off Category */}
            <Box sx={{ 
              flex: 1, 
              p: 4, 
              border: '2px solid', 
              borderColor: 'divider', 
              borderRadius: 2,
              backgroundColor: 'rgba(25, 118, 210, 0.05)'
            }}>
              <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
                Sound Off
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontWeight: 500, color: 'text.secondary' }}>
                Judged separately for inside and outside systems:
              </Typography>
              <Box component="ul" sx={{ pl: 2.5, typography: 'body1' }}>
                <Typography component="li" sx={{ mb: 1 }}>Cleanest sound quality</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Cleanest installation</Typography>
                <Typography component="li">Loudest system (measured with dB meter)</Typography>
              </Box>
            </Box>

            {/* Car Show Category */}
            <Box sx={{ 
              flex: 1, 
              p: 4, 
              border: '2px solid', 
              borderColor: 'divider', 
              borderRadius: 2,
              backgroundColor: 'rgba(25, 118, 210, 0.05)'
            }}>
              <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
                Car Show
              </Typography>
              <Box component="ul" sx={{ pl: 2.5, typography: 'body1' }}>
                <Typography component="li" sx={{ mb: 1 }}>Cleanest engine bay</Typography>
                <Typography component="li" sx={{ mb: 1 }}>Loudest exhaust</Typography>
                <Typography component="li">Best overall (judged by point system)</Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                Overall judging considers interior, exterior, and engine bay
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Event Highlights */}
        {/* <Box mb={10}>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 900 }}>
            Festival Pillars
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4
            }}
          >
            {[
              { icon: <DirectionsCar fontSize="large" />, title: 'Custom Builds', text: '200+ Bespoke Vehicles' },
              { icon: <MusicNote fontSize="large" />, title: 'Sound Wars', text: '50,000W+ Systems' },
              { icon: <Brush fontSize="large" />, title: 'Design Showdown', text: 'Award-Winning Artists' },
              { icon: <EmojiEvents fontSize="large" />, title: 'Competitions', text: '15 Trophy Categories' },
              { icon: <Groups fontSize="large" />, title: 'Community', text: '10,000+ Enthusiasts' },
            ].map((item) => (
              <Box 
                key={item.title}
                sx={{ 
                  flex: { xs: '0 0 100%', sm: '0 0 calc(50% - 32px)', md: '0 0 calc(33.333% - 32px)' },
                  maxWidth: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(33.333% - 32px)' },
                  p: 4, 
                  border: '2px solid', 
                  borderColor: 'divider', 
                  borderRadius: 2,
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h5" gutterBottom>{item.title}</Typography>
                <Typography color="text.secondary">{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box> */}

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
            component="a"
            href='https://docs.google.com/forms/d/e/1FAIpQLSeDF9XjWOUC5D22Ggd8iWKdcMC73H_fM2HBOnQHXPh5jZUqMg/viewform?usp=header'
            target="_blank"
            rel="noopener noreferrer"
            variant='contained' 
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