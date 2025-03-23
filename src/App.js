import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Open from './LoginSignup/Open';
import Login from './LoginSignup/Login';
import SignIn from './LoginSignup/SignIn';
import Home from './LoginSignup/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Open />} />
        <Route path='/login' element={<Login />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Open' element={<Open/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
