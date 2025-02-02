import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import './Login.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HcY3sBPehjjRAIDqK0effgyGdbSXos3FskpPGbg5ny8mDLV8bsTBzdbTpydm8HgCHHTAIeznUTPBadWDkKOO7dF00Otse9DAn');


function App() {
 const [{user}, dispatch] = useStateValue();

 //useEffect <<<<<<POWERFULL
 // piece of code witch runs based on a given condition

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      //the user is logged in
      dispatch({
        type: "SET_USER",
        user: authUser
      });
    }
    else {
      //the user is logged out
      dispatch({
        type: "SET_USER",
        user: null
      });
    }
  });

  return () => {
    //any cleanup operations go in there
    unsubscribe();
  }
  
 }, []);
 console.log("User is >>>", user);
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          </Route>
        <Route path="/login">
          <Login />
          </Route>
        <Route path="/">
          <Header />
          <Home />
          </Route>
      </Switch>
    </div>
    </Router> 
  );
}

export default App;
