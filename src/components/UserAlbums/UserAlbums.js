import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Album.css';

function UserAlbums() {

  const [selectedUser, setSelectedUser] = useState({});
  const [userAlbums, setUserAlbums] = useState([]);

  const navigate = useNavigate();

  //get state to get selected user id
  const {state} = useLocation();


  //Fetch user data 
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/${state.id}`);
      const json = await data.json();
  
      // set state with the result
      setSelectedUser(json);
    }
  
    //catch any errors
    fetchData()
      .catch(console.error);;
  }, []);


  //Fetch user's albums 
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${state.id}`);
      const json = await data.json();
  
      // set state with the result
      setUserAlbums(json);
    }
  
    //catch any errors
    fetchData()
      .catch(console.error);;
  }, []);


  //Render list of albums
  const albumsList = userAlbums.map((userAlbum) => {
    return <li 
    className='list' 
    key={userAlbum.id} 
    onClick={() => navigate(`/album/${userAlbum.id}`, {
      state: {
        id: userAlbum.id
      }
    })} 
    >{userAlbum.title}</li>
  })

  return (
    <div className='albums'>
      <h3>{selectedUser.username} albums</h3>
      <ol>
        {albumsList}
      </ol>
    </div>
  )
}

export default UserAlbums
