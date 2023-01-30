import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/HomeS/Home';
import { Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Users from './components/UsersList/Users';
import { useNavigate } from "react-router-dom";

function App() {

  const [user, setUser] = useState({});

  const navigate = useNavigate()

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwtDecode(response.credential);
    console.log(userObject)
    setUser(userObject)
    navigate('/home')
    document.getElementById('signInDiv').hidden = true;
  };

  function handleSignOut() {
    setUser({})
    navigate('/')
    document.getElementById('signInDiv').hidden = false;
  }


  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "775099268620-vj24bv0dtfnshi3k2scitcg6nau7dahb.apps.googleusercontent.com",
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )

    google.accounts.id.prompt();
    
  }, []);

  //if we have no user we show the: sign in btn

  //if we have a user show the: log out btn

  return (
    <div>
       <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Users user={user} setUser={setUser} handleSignOut={handleSignOut}  />} />
       </Routes>
    </div>
  );
}

export default App;
