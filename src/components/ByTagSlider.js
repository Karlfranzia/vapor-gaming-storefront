import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import { byTag } from '../utils/API.js';

const ByTagSlider = ({tag}) => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await byTag(tag);
        setGamesData(games);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return gamesData.length > 0 ? <Slider games={gamesData} /> : <div>Loading...</div>;
};

export default ByTagSlider;
