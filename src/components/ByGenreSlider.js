import React, { useEffect, useState } from 'react';
import SliderComponent from './Slider';
import { byGenre } from '../utils/API.js';

const ByGenreSlider = ({genre, type}) => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await byGenre(genre);
        console.log(games)
        setGamesData(games);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return gamesData.length > 0 ? <SliderComponent games={gamesData} type={type} /> : <div>Loading...</div>;
};

export default ByGenreSlider;
