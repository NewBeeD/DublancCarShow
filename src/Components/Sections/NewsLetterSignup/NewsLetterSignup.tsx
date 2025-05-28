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


const NewsLetterSignup = () => {
  return (
      <Box sx={{ bgcolor: '#1a1a1a', py: 8, color: 'white' }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Get Updates & Win VIP Passes!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Enter your email for a chance to win a $1,000 car audio system
      </Typography>
      <Box component="form" sx={{ maxWidth: 400, margin: '0 auto' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your email"
          InputProps={{
            sx: { bgcolor: 'white', borderRadius: 1 }
          }}
        />
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={{ mt: 2, px: 6 }}
        >
          Subscribe
        </Button>
      </Box>
    </Container>
  </Box>
  );
}

export default NewsLetterSignup;

