import React, { useEffect, useState } from 'react';
import SliderComponent from './Slider';
import { topRated } from '../utils/API.js';
import {Typography } from '@mui/material';

const TopGamesSlider = () => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await topRated();
        setGamesData(games);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return gamesData.length > 0 ?<SliderComponent games={gamesData} type={'Top Rated Games'} /> : <div>Loading...</div>;
};

export default TopGamesSlider;
