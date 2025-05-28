import { Container, Typography, Box, Button, Avatar, Stack } from '@mui/material';

const VendorHighlights = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
        Featured Brands
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        useFlexGap
        sx={{
          gap: { xs: 4, md: 8 },
          padding: { xs: 2, md: 0 }
        }}
      >
        {['alpine', 'pioneer', 'jbl', 'sony'].map((brand) => (
          <Avatar
            key={brand}
            src={`/${brand}-logo.png`}
            sx={{ 
              width: 120, 
              height: 120, 
              bgcolor: 'white', 
              p: 2,
              m: 1 // Add margin for better spacing on wrap
            }}
            variant="square"
          />
        ))}
      </Stack>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="outlined" color="warning" size="large">
          Become an Exhibitor
        </Button>
      </Box>
    </Container>
  );
}

export default VendorHighlights;