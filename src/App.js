import React,{useContext} from 'react';
import Navbar, { ThemeContext} from './components/Navbar'
import Archive from './components/Archive'

import './App.css';

function App() {
  const cts=useContext(ThemeContext)
  return (
      <div className="App" style={{background:cts.darkBlue}}>
        <Navbar/>
        <Archive/>
      </div>
  );
}

export default App;
