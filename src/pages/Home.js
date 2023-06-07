import React from 'react';
import TopGamesSlider from '../components/TopGamesSlider'
import NewReleasesSlider from '../components/NewReleasesSlider';
import ResponsiveAppBar from '../components/AppBar';
import LeftSidebar from '../components/LeftSidebar';
import RPGSlider from '../components/RPGSlider';
import ActionSlider from '../components/ActionSlider';

function Home() {
    return (
      <div >
        <ResponsiveAppBar/>
        <LeftSidebar />       
        <TopGamesSlider/>
        <NewReleasesSlider/>
        <RPGSlider/>
        <ActionSlider/>
      </div>
    );
  }

export default Home