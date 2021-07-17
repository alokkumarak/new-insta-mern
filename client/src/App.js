import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Profile from './components/Profile';
import { initialState, reducer } from './ContextReducer/reducer';
import UserProfile from './components/UserProfile'
export const UserContext = createContext();

const Routing = () => {

  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      dispatch({ type: 'USER', payload: user })
      // history.push("/home");
    }
    else {
      history.push("/login")

    }
  }, [])

  return (
    <Switch>
      <Route exact path="/" ><SignUp /></Route>
      <Route path="/login" ><Login /></Route>
      <Route path="/home" ><Home /></Route>
      <Route exact path="/profile" ><Profile /></Route>
      <Route path="/profile/:id" ><UserProfile /></Route>
    </Switch>
  )
}


function App() {

  // const reToken = "Bearer " + localStorage.removeItem("instaToken");
  // const Token = "Bearer " + localStorage.getItem('instaToken');

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routing />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
