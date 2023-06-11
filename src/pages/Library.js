import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import ResponsiveAppBar from '../components/AppBar';
import LeftSidebar from '../components/LeftSidebar';
import { Stack, TextField, Button, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

function Library() {
  const [games, setGames] = useState([]);
  const { loading, data } = useQuery(QUERY_USER);
  
  useEffect(() => {
    if (data ) {
      setGames(data.user.games);
      console.log(games)
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const displayCards = games.map((game, index) => (
    <Grid item key={index} xs={12} sm={6} md={4}>
      <Link to={`/game/${game.slug}`} style={{ textDecoration: 'none' }} as="a">
        <Card elevation={5}>
          <CardMedia component="img" image={game.background} style={{ height: '10rem', objectFit: 'cover' }} />
          <CardContent>
            <Typography variant="h7">{game.name}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  ));

  return (
    <div>
      <ResponsiveAppBar />
      <LeftSidebar />
      <Stack spacing={2} alignItems="center" mt={'10%'}>
        <Grid container spacing={2} sx={{width:'70%'}}>
          {displayCards}
        </Grid>
      </Stack>
    </div>
  );
}

export default Library;
