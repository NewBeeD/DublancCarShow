import Video from 'next-video';
import test from '../../../../videos/test.mp4'
import styles from '../../../Styles/MainSection/MainSection.module.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import CountdownTimer from '../CountDownTimer/CountDownTimer';

import Link from 'next/link';

export default function MainSection() {




  const registerationForm = () => {

    
  }



  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}
    >
      {/* Video Container */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >


        {/* <Video 
          src={test}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className={styles.MainVideo}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}          
        /> */}

        <Video 
          src={test}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className={styles.MainVideo}
        />



      </Box>

      {/* Text Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}
      >
        <Box width={{ xs: 350, sm: 600 }}>
          
          
          <Typography 
          component="div" 
          sx={{ fontWeight: 'bold', mb: 2, fontSize: {xs: '60px', sm: '70px'},
        opacity: '80%' }}
          // className={styles.gradientText}
          >
            DriveFest
          </Typography>

          <Typography 
          component="div" 
          sx={{ fontWeight: 'bold', mb: 2, fontSize: {xs: '30px', sm: '40px'},
          opacity: '80%' }}>
            Aug 31st, 2025
          </Typography>


          <Box>

            <Button 
              component="a"
              href='https://docs.google.com/forms/d/e/1FAIpQLSeDF9XjWOUC5D22Ggd8iWKdcMC73H_fM2HBOnQHXPh5jZUqMg/viewform?usp=header'
              target="_blank"
              rel="noopener noreferrer"
              variant='contained'
              color='error'
              sx={{
                width: {xs: '160px'},
                height: {xs: '60px'},
                fontSize: {xs: '14px', sm: '18px'},
                fontWeight: 900,
                lineHeight: {xs:'25px'},
                letterSpacing: {xs: '4px'}
              }}
            >
              Register Today
            </Button>

          </Box>


          {/* <Typography sx={{ fontSize: {xs: '20px', sm: '60px'} }}>
            Almond Park, Dublanc
          </Typography> */}

        </Box>
      </Box>
    </Box>
  )
}