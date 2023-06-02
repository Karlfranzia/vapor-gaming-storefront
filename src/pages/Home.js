import React from 'react';
import TopGamesSlider from '../components/TopGamesSlider'
import ResponsiveAppBar from '../components/AppBar';
import LeftSidebar from '../components/LeftSidebar';

function Home() {
    return (
      <div style={{ display: 'flex' }}>
        <ResponsiveAppBar/>
        <LeftSidebar />
        <div style={{ flexGrow: 1 }}></div>
          <TopGamesSlider/>
        < div/>
      </div>
    );
  }

export default Home