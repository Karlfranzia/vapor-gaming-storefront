import React from 'react';
import ResponsiveAppBar from '../components/AppBar';
import LeftSidebar from '../components/LeftSidebar';


function Game(){
    return(
        <div style={{ display: 'flex' }}>
        <ResponsiveAppBar/>
        <LeftSidebar />
        <div style={{ flexGrow: 1 }}></div>
          
        < div/>
      </div>
    )
}

export default Game