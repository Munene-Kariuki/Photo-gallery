import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Home from './components/HomeS/Home';
import { Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Users from './components/UsersList/Users';
import { useNavigate } from "react-router-dom";
import UserAlbums from './components/UserAlbums/UserAlbums';
import Album from './components/Album/Album';
import RenderPhoto from './components/Photo/RenderPhoto';
import { UserContext } from './components/UserContext';

function App() {

  const [user, setUser] = useState({});
  const [photoWithUpdatedTitle, setPhotoWithUpdatedTitle] = useState({});

  //Create user value
  const value = useMemo(() => ({user, setUser}), [user, setUser]);

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

  //Prompt sign up if no user is registered
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate('/')
    }
  }, [user])

  console.log(user) 
  

  return (
    <div>
      <UserContext.Provider value={value} >
        <Routes>
          <Route path='/' exact element={<Home handleSignOut={handleSignOut} />} />
          <Route path='/home' element={<Users user={user} setUser={setUser} handleSignOut={handleSignOut}  />} />
          <Route path='/user/:id' element={<UserAlbums handleSignOut={handleSignOut} />} />
          <Route path='/album/:id' element={<Album photoWithUpdatedTitle={photoWithUpdatedTitle} handleSignOut={handleSignOut} />} />
          <Route path='/photo/:id' element={<RenderPhoto setPhotoWithUpdatedTitle={setPhotoWithUpdatedTitle} handleSignOut={handleSignOut} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
