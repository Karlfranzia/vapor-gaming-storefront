import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import { topRated } from '../utils/API.js';

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

  return gamesData.length > 0 ? <Slider games={gamesData} /> : <div>Loading...</div>;
};

export default TopGamesSlider;
