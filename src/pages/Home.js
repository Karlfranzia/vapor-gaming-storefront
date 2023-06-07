import React from 'react';
import TopGamesSlider from '../components/TopGamesSlider'
import NewReleasesSlider from '../components/NewReleasesSlider';
import ResponsiveAppBar from '../components/AppBar';
import LeftSidebar from '../components/LeftSidebar';
import RPGSlider from '../components/RPGSlider';
import ActionSlider from '../components/ActionSlider';
import IndieSlider from '../components/IndieSlider';
import StrategySlider from '../components/StrategySlider';
import ShooterSlider from '../components/ShooterSlider';
import CasualSlider from '../components/CasualSlider';
import MMOSlider from '../components/MMOSlider';
function Home() {
    return (
      <div >
        <ResponsiveAppBar/>
        <LeftSidebar />       
        <TopGamesSlider/>
        <NewReleasesSlider/>
        <RPGSlider/>
        <ActionSlider/>
        <IndieSlider/>
        <StrategySlider/>
        <ShooterSlider/>
        <CasualSlider/>
        <MMOSlider/>
      </div>
    );
  }

export default Home