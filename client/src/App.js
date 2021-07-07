import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Profile from './components/Profile';


function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" ><SignUp /></Route>
        <Route exact path="/login" ><Login /></Route>
        <Route exact path="/home" ><Home /></Route>
        <Route exact path="/profile" ><Profile /></Route>
      </Switch>
    </Router>
  );
}

export default App;
