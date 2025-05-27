import Image from "next/image";

import Box from '@mui/material/Box'

import MainSection from "@/Components/Sections/MainSection/MainSection";
import WhyAttend from "@/Components/Sections/SectionTwo/WhyAttend";
import FeaturedAttractions from "@/Components/Sections/SectionThree/FeaturedAttractions";
import Testimonials from "@/Components/Sections/SectionFour/Testimonials";
import ScheduleHighlight from "@/Components/Sections/SectionFive/ScheduleHighlight";
import VendorHighlights from "@/Components/Sections/SectionSix/VendorHighlights";
import NewsLetterSignup from "@/Components/Sections/SectionSeven/NewsLetterSignup";
import Footer from "@/Components/Footer/Footer";


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

        
        <ScheduleHighlight />
        <WhyAttend />
        {/* <FeaturedAttractions /> */}
        <Testimonials />
        <VendorHighlights />
        <NewsLetterSignup />

      </Box>


      <Footer />


    </Box>


    

  );
}
