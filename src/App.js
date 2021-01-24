import React,{useContext} from 'react';
import Navbar, { ThemeContext} from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Archive from './components/Archive'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {Route,Switch} from 'react-router-dom'

import './App.css';

function App() {
  const cts=useContext(ThemeContext)
  return (
    <Switch>
      <Route exact path='/archive' component={Archive}/>
      <div className="App" style={{background:cts.darkBlue}}>
        <Navbar/>
        <div id="home"><Home/></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
    </Switch>
  );
}

export default App;
