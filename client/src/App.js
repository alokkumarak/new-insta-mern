import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';


function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" ><SignUp /></Route>
        <Route exact path="/login" ><Login /></Route>
        <Route exact path="/home" ><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
