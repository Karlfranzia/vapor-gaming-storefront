import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TrailerSlider = ({ trailers, type }) => {
  

  const displayCards = trailers.map((trailer, index) => (
    <div key={index} className="slide-content"  >
      <Card>
        <Card>
            <CardMedia component="img" image={screenshot.image} style={{ height: '10rem', objectFit: 'cover' }} />
        </Card>
      </Card>
    </div>


    
  ));

  // Set the Slick carousel settings
  const slickSettings = {
    // other settings...
    infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,       
        rows: 1,
  };

  return (
    
      <Slider {...slickSettings} >   
        {displayCards}
      </Slider>
      
      
    
   
  );
};

export default TrailerSlider;
