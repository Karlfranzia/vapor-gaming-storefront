import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, TextField, Button, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar';
import LeftSidebar from '../components/LeftSidebar';
import { searchGame } from '../utils/API';

function Search() {
  const [searchField, setSearchField] = useState('');
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await searchGame(searchField);
        setGameData(games);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchField]);

  const displayCards = gameData.map((game, index) => (
    <Grid item key={index} xs={12} sm={6} md={4}>
      <Link to={`/game/${game.slug}`} style={{ textDecoration: 'none' }} as="a">
        <Card elevation={5}>
          <CardMedia component="img" image={game.background_image} style={{ height: '10rem', objectFit: 'cover' }} />
          <CardContent>
            <Typography variant="h7">{game.name}</Typography>
            <Typography variant="body2">{game.description}</Typography>
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
        <TextField
          label="Search"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <Button variant="contained" onClick={() => console.log(searchField)}>
          Search
        </Button>
        <Grid container spacing={2} sx={{width:'70%'}}>
          {displayCards}
        </Grid>
      </Stack>
    </div>
  );
}

export default Search;
