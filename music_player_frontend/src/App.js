import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components//login/login'
import Register from './components/register/register'
import PlayerApp from "./components/PlayerApp";
import { useState } from 'react'


function App() {
  const [user, setLoginUser] = useState({})

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={(user && user._id) ? <PlayerApp setLoginUser={setLoginUser} /> : <Register setLoginUser={setLoginUser} />} />
        <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
