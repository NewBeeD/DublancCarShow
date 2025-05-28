// src/Components/Sections/VendorHighlight/ClientSlider.tsx
"use client";

import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlideItem {
  image: string;
  title: string;
}

interface ClientSliderProps {
  slides: SlideItem[];
}

const SliderComponent = ({ slides }: ClientSliderProps) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
  };

  return (
    <Slider {...sliderSettings}>
      {slides.map((item) => (
        <Box key={item.title} sx={{ 
          position: 'relative', 
          borderRadius: 2, 
          overflow: 'hidden',
          mx: 1
        }}>
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            sx={{ 
              width: '100%', 
              height: 400, 
              objectFit: 'cover',
              display: 'block'
            }}
          />
          {/* <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(0,0,0,0.6)',
            color: 'white',
            p: 3,
            backdropFilter: 'blur(4px)'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {item.title}
            </Typography>
          </Box> */}
        </Box>
      ))}
    </Slider>
  );
};

export default SliderComponent;