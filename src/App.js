import React from "react";
import './App.css';
// import MyContact from "./components/contactUs"; 
// import Home from "./page/home";
// import LearnRedux from "./components/learnRedux";
import {Routes} from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import LearnRedux from "./components/learnRedux";
const App = () => {
  return (
    <>
    <Navbar />
    <LearnRedux />
    {/* <LearnRedux /> */}
    <Routes>
      {/* <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Header />}></Route> */}
    </Routes>
    </>
  );
} 

export default App;
