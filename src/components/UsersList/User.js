import React, { useEffect, useState } from 'react';
import './user.css';
import { useNavigate } from 'react-router-dom';

function User({user}) {

  const [userAlbums, setUserAlbums] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`);
      const json = await data.json();
  
      // set state with the result
      setUserAlbums(json);
    }
  
    //catch any errors
    fetchData()
      .catch(console.error);;
  }, []);

  //Redirect to a users albums
  function handleUserClick() {
    navigate(`/user/${user.id}`, {
      state: {
        id: user.id
      }
    })
  }

  return (
    <tr onClick={handleUserClick} >
      <td>{user.username}</td>
      <td>{userAlbums.length}</td>
    </tr>
  )
}

export default User
