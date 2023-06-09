import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function GameDescription({gameData}) {
    return (
      <Card elevation={5} sx={{width:'60%'}} >                
          <CardContent>
          <Typography dangerouslySetInnerHTML={{ __html: gameData.description }}></Typography>
          </CardContent>        
      </Card>
    );
  }