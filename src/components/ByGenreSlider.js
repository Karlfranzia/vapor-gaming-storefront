import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import { byGenre } from '../utils/API.js';

const ByGenreSlider = ({genre}) => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await byGenre(genre);
        setGamesData(games);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return gamesData.length > 0 ? <Slider games={gamesData} /> : <div>Loading...</div>;
};

export default ByGenreSlider;
