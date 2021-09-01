import React  from 'react';
import './App.css';
import { BrowserRouter as  Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Sports from './Pages/Sports';
import Entertainment from './Pages/Entertainment';
import Science from './Pages/Science';
import Business from './Pages/Business';
import Politics from './Pages/Politics'
// import Dashboard from './Pages/Dashboard'
import Dashboard from './Pages/Dashboard'




function App() {
  

  return (
    
         
        <Switch>
       <Route path='/' exact>
          <Home />
        </Route>
          <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/politics'>
          <Politics />
        </Route>
        <Route exact path='/signIn'>
        <SignIn />
        </Route>
        <Route exact path='/business'>
        <Business />
        </Route>
        <Route exact path='/science'>
        <Science />
        </Route>
        <Route exact path='/sports'>
        <Sports />
        </Route>
        <Route exact path='/entertainment'>
        <Entertainment />
        </Route>
        
      </Switch>

          


    
    
      

  );
}

export default App;
