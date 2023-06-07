import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import { newReleases } from '../utils/API.js';

const NewReleasesSlider = () => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await newReleases();
        setGamesData(games);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return gamesData.length > 0 ? <Slider games={gamesData} type={'New Releases'} /> : <div>Loading...</div>;
};

export default NewReleasesSlider;
