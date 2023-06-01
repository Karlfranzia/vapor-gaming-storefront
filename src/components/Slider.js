import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';


const Slider = ( {games} ) => {
    console.log(games)
    const displayCards = games.map((game, index) => (
      <Card key={index}>
        <CardMedia component="img" image={game.background_image} />
        <CardContent>
          <Typography variant="h6">{game.name}</Typography>
          <Typography variant="body2">{game.description}</Typography>
        </CardContent>
      </Card>
    ));
  
    return (
      <div>
        <div>{displayCards}</div>
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    );
  };

  export default Slider
  