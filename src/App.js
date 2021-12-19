import React, { useState } from 'react';
import './App.css';
import { Router } from "react-router-dom";
import Home from './container/Home'
import { Routes, Route, Link } from "react-router-dom";
import TopRated from './container/TopRated';
import Recommended from './container/Recommended';
import Landing from './container/Landing.js';
import Navbar  from './container/NavBar'


function App() {
  
  return (
      <>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Landing />} />
      <Route path="/topRated" element={<TopRated />} />
      <Route path="/rec" element={<Recommended />} />
      </Routes>
    </>
      
      
  )
}

export default App;
