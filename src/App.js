import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/HomeS/Home';
import { Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function App() {

  const [user, setuser] = useState({});

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwtDecode(response.credential);
    console.log(userObject)
    setuser(userObject)
  };


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
    
  }, []);

  //if we have no user we show the: sign in btn

  //if we have a user show the: log out btn

  return (
    <div>
       <Home />
    </div>
  );
}

export default App;
