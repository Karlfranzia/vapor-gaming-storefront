import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import { searchGame } from '../utils/API.js';

const SearchGamesSlider = ({id}) => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await searchGame(id);
        setGamesData(games);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return gamesData.length > 0 ? <Slider games={gamesData} /> : <div>Loading...</div>;
};

export default SearchGamesSlider;
