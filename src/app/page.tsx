import Image from "next/image";

import Box from '@mui/material/Box'

import MainSection from "@/Components/Sections/MainSection/MainSection";
import WhyAttend from "@/Components/Sections/WhyAttend/WhyAttend";
import FeaturedAttractions from "@/Components/Sections/FeaturedAttractions/FeaturedAttractions";
import Testimonials from "@/Components/Sections/Testimonials/Testimonials";
import ScheduleHighlight from "@/Components/Sections/ScheduleHighlight/ScheduleHighlight";
import VendorHighlights from "@/Components/Sections/VendorHighlight/VendorHighlights";
import NewsLetterSignup from "@/Components/Sections/NewsLetterSignup/NewsLetterSignup";
import Footer from "@/Components/Footer/Footer";
import CountdownTimer from "@/Components/Sections/CountDownTimer/CountDownTimer";


export default function Home() {
  return (


    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden', // Prevents horizontal scroll
      }}
    >

      <MainSection />


      <Box component="main" sx={{ flex: 1 }}>

        <CountdownTimer />
        <ScheduleHighlight />
        {/* <WhyAttend /> */}
        {/* <FeaturedAttractions /> */}
        <Testimonials />
        <VendorHighlights />
        <NewsLetterSignup />

      </Box>


      <Footer />


    </Box>


    

  );
}
