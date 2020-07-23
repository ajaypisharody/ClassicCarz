import React from 'react';
//import logo from './logo.png';
import './App.css';
import Home from "./pages/Home";

import Cars from "./pages/Cars";
import Error from "./pages/Error";
import SingleCar from "./pages/SingleCar";
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
 
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    
    <Route exact path="/cars" component={Cars}/>

    <Route exact path="/cars/:slug" component={SingleCar}/>
    <Route component={Error}/>
    </Switch>
    </>
    );
}

export default App;
