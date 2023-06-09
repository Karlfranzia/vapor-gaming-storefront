import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from '../components/AppBar';
import LeftSidebar from '../components/LeftSidebar';
import { useParams } from 'react-router-dom';
import { gameDetails } from '../utils/API';
import { gameScreenshotsAPI } from '../utils/API';
import GameHeroElement from '../components/GameHeroElement';
import Stack from '@mui/material/Stack';
import GameDescription from '../components/GameDescription';
import ScreenshotSlider from '../components/ScreenshotSlider';

function Game() {
  const { slug } = useParams();
  const [gameData, setGameData] = useState();
  const [gameScreenshots, setGameScreenshots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const game = await gameDetails(slug);
        setGameData(game);
        console.log(game);
      } catch (error) {
        console.error(error);
      };

    };

    fetchData();
  }, [slug]);


  useEffect(() => {
    const fetchScreenshots = async () => {
      try {
        if (gameData && gameData.id) {
          const screenshots = await gameScreenshotsAPI(gameData.id);
          console.log(screenshots)
          setGameScreenshots(screenshots);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchScreenshots();
  }, [gameData]);

  return (
    <div>
      <ResponsiveAppBar />
      <LeftSidebar />
      <Stack spacing={2} alignItems="center" mt={'10%'}>
        {gameData && <GameHeroElement gameData={gameData} />}
        <div style={{width:'80%'}}>
          <ScreenshotSlider screenshots={gameScreenshots} />
        </div>
        {gameData && <GameDescription gameData={gameData} />}
      </Stack>
    </div>
  );
}

export default Game;
