import React from 'react';

// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';

import Footer from './components/Footer';

import Booknow from './pages/Booknow';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
           <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        {/* <Route exact path="/gym/" component={Gym}/>
        <Route exact path="/hairsalon/" component={HairSalon}/>
        <Route exact path="/steamandsauna/" component={SteamAndSauna}/>
        <Route exact path="/manicureandpedicure/" component={ManicureAndPedicure}/>
        <Route exact path="/moroccobath/" component={MoroccoBath}/>
        <Route exact path="/massage/" component={Massage}/> */}
        <Route exact path="/services/:slug" component={SinglePage} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
