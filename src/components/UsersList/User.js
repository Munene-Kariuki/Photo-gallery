import React, { useEffect, useState } from 'react';
import './user.css';

function User({user}) {

  const [userAlbums, setUserAlbums] = useState([]);

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

  return (
    <tr>
      <td>{user.username}</td>
      <td>{userAlbums.length}</td>
    </tr>
  )
}

export default User
