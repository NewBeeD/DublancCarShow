'use client'


import { useState, useEffect } from 'react';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate target date (August 31st of current or next year)
    const getTargetDate = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, 7, 31); // August is month 7 (0-indexed)
      
      // If August 31 has already passed this year, use next year's date
      if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1);
      }
      return targetDate;
    };

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = getTargetDate().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <Box
    marginTop={{ xs: 4}}>

      <Stack 
      direction='row'
       sx={{ border: '1px solid black', height: {xs: '90px', sm: '120px'}}}
       justifyContent='space-evenly'
       alignItems='center'>
        
        
        <Stack direction='column'>

          <Typography sx={{ fontSize: {xs: '30px', sm: '60px'}}}>{timeLeft.days}</Typography>
          <Typography>Days</Typography>

        </Stack>

        <Divider orientation="vertical" variant="middle" flexItem />

        
        
        <Stack direction='column'>

          <Typography sx={{ fontSize: {xs: '30px', sm: '60px'}}}>{timeLeft.hours}</Typography>
          <Typography>Hours</Typography>

        </Stack>

        <Divider orientation="vertical" variant="middle" flexItem />

        
        
        <Stack direction='column'>

          <Typography sx={{ fontSize: {xs: '30px', sm: '60px'}}}>{timeLeft.minutes}</Typography>
          <Typography>Minutes</Typography>

        </Stack>

        <Divider orientation="vertical" variant="middle" flexItem />

        
        
        <Stack direction='column'>

          <Typography sx={{ fontSize: {xs: '30px', sm: '60px'}}}>{timeLeft.seconds}</Typography>
          <Typography>Seconds</Typography>

        </Stack>

      </Stack>


    </Box>
  );
};

export default CountdownTimer;