import React from 'react';
import './App.css';
import 'tachyons';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'; 
import About from './components/About/About'; 
    import WhoWeAre from './components/About/WhoWeAre/WhoWeAre'; 
    import Partners from './components/About/Partners/Partners';
    import Contact from './components/About/Contact/Contact'; 
    import FAQ from './components/About/FAQ/FAQ';


import CleanWater from './components/CleanWater/CleanWater';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Blog from './components/Blog/Blog';

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
              <Route path='/who-we-are'>
                <WhoWeAre/>
              </Route>
              <Route path='/partners'>
                <Partners/>
              </Route>
              <Route path='/FAQ'>
                <FAQ/>
              </Route>
               <Route path ='/contact'>
                <Contact/>
              </Route>
          <Route path ='/clean-water'>
            <CleanWater/>
          </Route>
          <Route path ='/get-involved'>
            <GetInvolved/>
          </Route>
          <Route path ='/blog'>
            <Blog/>
          </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
