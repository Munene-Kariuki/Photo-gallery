import React, { useState } from 'react';
import './App.css';
import Home from './components/HomeS/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {

  const[user, setUser] = useState(null);

  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Login onLogIn={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
