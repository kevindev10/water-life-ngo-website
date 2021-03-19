import React from 'react';
import './App.css';
import 'tachyons';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'; 
import About from './components/About/About'; 
import Contact from './components/Contact/Contact'; 
import CleanWater from './components/CleanWater/CleanWater'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
           <Route path='/about'>
            <About/>
          </Route>
           <Route path ='/contact'>
            <Contact/>
          </Route>
          <Route path ='/clean-water'>
            <CleanWater/>
          </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
