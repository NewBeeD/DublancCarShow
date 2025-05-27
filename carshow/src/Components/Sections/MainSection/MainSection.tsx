import Video from 'next-video';
import test from '../../../../videos/test.mp4'
import styles from '../../../Styles/MainSection/MainSection.module.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function MainSection() {
  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
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
        <Video 
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
          sx={{ fontWeight: 'bold', mb: 2, fontSize: {xs: '40px', sm: '80px'} }}>
            Car Show 2025
          </Typography>


          <Typography sx={{ fontSize: {xs: '30px', sm: '60px'} }}>
            Dublanc
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}