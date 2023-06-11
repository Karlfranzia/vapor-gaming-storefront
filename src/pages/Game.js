import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, TextField, Button, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useMutation, useQuery } from '@apollo/client';
import { gameDetails, gameScreenshotsAPI } from '../utils/API';
import ResponsiveAppBar from '../components/AppBar';
import LeftSidebar from '../components/LeftSidebar';
import GameHeroElement from '../components/GameHeroElement';
import GameDescription from '../components/GameDescription';
import ScreenshotSlider from '../components/ScreenshotSlider';
import { ADD_GAME_TO_USER } from '../utils/mutation';
import { QUERY_USER } from '../utils/queries';
import { useParams } from 'react-router-dom';
import AuthService from '../utils/auth'
function Game() {
  const [gameData, setGameData] = useState(null);
  const [gameScreenshots, setGameScreenshots] = useState([]);
  
  const { slug } = useParams();
  const user = AuthService.getProfile()
  console.log(user)

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const game = await gameDetails(slug);
        setGameData(game);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, [slug]);
  
  useEffect(() => {
    const fetchScreenshots = async () => {
      try {
        if (gameData && gameData.id) {
          const screenshots = await gameScreenshotsAPI(gameData.id);
          setGameScreenshots(screenshots);
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchScreenshots();
  }, [gameData]);
  
  const [addGameToUser] = useMutation(ADD_GAME_TO_USER);
  
  const handleAddGame = () => {
    const game = {
          gameId: gameData.id,
          name: gameData.name,
          background: gameData.background_image,
    }
    console.log(game)
    if (user) {
      const userId = user.data._id; 
      addGameToUser({
        variables: {       
          profileId: userId,
          game: game 
        },
        
      })
        .then(() => {
          console.log('Game added to user successfully');
        })
        .catch(error => {
          console.error('Failed to add game to user:', error);
        });
    }
  };
  
  return (
    <div>
      <ResponsiveAppBar />
      <LeftSidebar />
      <Stack spacing={2} alignItems="center" mt={'10%'}>
        {gameData && <GameHeroElement gameData={gameData} />}
        <div style={{ width: '80%' }}>
          <ScreenshotSlider screenshots={gameScreenshots} />
        </div>
        {gameData && <GameDescription gameData={gameData} />}
        <Button variant="contained" onClick={handleAddGame}>
          Add to Library
        </Button>
      </Stack>
    </div>
  );
}

export default Game;
