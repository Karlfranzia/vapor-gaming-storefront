import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GameHeroElement({gameData}) {
  return (
    <Card elevation={5} sx={{width:'60%'}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="400px"
          image= {gameData.background_image}
        />
        <CardContent>
          <Typography  variant="h5" component="div">
            {gameData.name}
          </Typography>
          <Typography  variant="h8" component="div">
            Realeased: {gameData.released}     MetaCritic Score:  {gameData.metacritic !== null ? gameData.metacritic.toString() : 'N/A'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}