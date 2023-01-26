import React from "react";
import { ToastContainer } from "react-toastify";
import './App.css';
import MyContact from "./components/contactUs"; 
import Header from "./components/Navbar";
// import {Switch, Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <ToastContainer />
    <Header />
    <MyContact />
    {/* <Switch>
      <Route exact path="/">
        <h1>Welcome to react redux contact book</h1>
      </Route>
      <Route path="/about">
        <h1>Welcome to react redux about book</h1>
      </Route>
      <Route path="/edit">
        <h1>Welcome to react redux edit book</h1>
      </Route>
    </Switch> */}
    </>
  );
} 

export default App;
