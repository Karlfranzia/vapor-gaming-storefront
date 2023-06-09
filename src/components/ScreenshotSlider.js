import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ScreenshotSlider = ({ screenshots }) => {
  console.log(screenshots)

  const displayCards = screenshots.map((screenshot, index) => (
    <div key={index} className="slide-content"  >
      
        <Card variant='outlined' sx={{ width:'95%', marginTop:'2rem'}}>
          <CardMedia component="img" image={screenshot.image} style={{ height: '10rem', objectFit: 'cover' }} />
        </Card>
     
    </div>


    
  ));

  // Set the Slick carousel settings
  const slickSettings = {
    // other settings...
    infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,       
        rows: 1,
      
       
  };

  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
      <Card elevation={8} sx={{ width:'100%', marginLeft:'5%',display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column', alignContent:'center'}}>
      
      
      <Slider {...slickSettings} style={{width:'90%', marginBottom:'2rem'}}>   
        {displayCards}
      </Slider>
      
      </Card>
    
    </div>
      
    
   
  );
};

export default ScreenshotSlider;
