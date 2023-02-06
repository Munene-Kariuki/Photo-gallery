import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/HomeS/Home';
import { Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Users from './components/UsersList/Users';
import { useNavigate } from "react-router-dom";
import UserAlbums from './components/UserAlbums/UserAlbums';
import Album from './components/Album/Album';
import RenderPhoto from './components/Photo/RenderPhoto';

function App() {

  const [user, setUser] = useState({});
  const [photoWithUpdatedTitle, setPhotoWithUpdatedTitle] = useState({});

  const navigate = useNavigate()

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwtDecode(response.credential);
    console.log(userObject)
    setUser(userObject)
    navigate('/home')
  };

  function handleSignOut() {
    setUser({})
    navigate('/')
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

    // google.accounts.id.prompt();
    
  }, [user]);

  console.log(user) 
  
  //

  return (
    <div>
       <Routes>
        <Route path='/' exact element={<Home handleSignOut={handleSignOut} />} />
        <Route path='/home' element={<Users user={user} setUser={setUser} handleSignOut={handleSignOut}  />} />
        <Route path='/user/:id' element={<UserAlbums />} />
        <Route path='/album/:id' element={<Album />} />
        <Route path='/photo/:id' element={<RenderPhoto setPhotoWithUpdatedTitle={setPhotoWithUpdatedTitle} />} />
       </Routes>
    </div>
  );
}

export default App;
