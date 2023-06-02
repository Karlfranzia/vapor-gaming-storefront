

import './App.css';
import TopGamesSlider from './components/TopGamesSlider'
import ResponsiveAppBar from './components/AppBar';
import LeftSidebar from './components/LeftSidebar';

function App() {
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

export default App;
