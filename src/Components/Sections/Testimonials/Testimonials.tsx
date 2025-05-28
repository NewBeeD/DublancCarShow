import { Container, Typography, Box, Stack } from '@mui/material';

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
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 2 }}
        justifyContent="center"
        divider={<Box sx={{ width: { md: 4 } }} />}
      >
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.author}
            sx={{
              flexBasis: '50%',
              px: { md: 2 },
              borderLeft: '4px solid #ff5722',
              pl: 3,
              py: 2
            }}
          >
            <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
              "{testimonial.text}"
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              - {testimonial.author}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export default Testimonials;