import React from 'react';
import GetPlayers from './components/GetPlayers';
import { useDarkMode } from './components/hooks/useDarkMode';
import './App.css';

function App() {
  console.log("app renders");
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
  }
  return (
    <div className="App" className="dark-mode__toggle">
      <header className="App-header">
        <div 
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>toggle dark mode</div>
       <GetPlayers/>
      </header>
    </div>
  );
}

export default App;
