import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComponent = ({ games, type }) => {
  useEffect(() => {
    // Optional: You can customize the Slick carousel settings here if needed
  }, []);

  const displayCards = games.map((game, index) => (
    <div key={index} className="slide-content"  >
      <Card variant='outlined' sx={{ width:'95%'}}>
        <CardMedia component="img" image={game.background_image} style={{ height: '10rem', objectFit: 'cover' }} />
        <CardContent>
          <Typography variant="h7">{game.name}</Typography>
          <Typography variant="body2">{game.description}</Typography>
        </CardContent>
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
        autoplay: true,
        autoplaySpeed: 3000,
        
        rows: 1,
  };

  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
      <Card elevation={8} sx={{marginTop:'5rem', width:'70%', marginLeft:'5%',display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column', alignContent:'center'}}>
      
      <Typography variant="h4" sx={{margin:'1rem'}}>{type}</Typography>
      <Slider {...slickSettings} style={{width:'90%', marginBottom:'2rem'}}>   
        {displayCards}
      </Slider>
      
      </Card>
    
    </div>
  );
};

export default SliderComponent;
