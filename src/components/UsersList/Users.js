import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from './User';
import './user.css';

function Users({user, handleSignOut}) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await data.json();
  
      // set state with the result
      setUsers(json);
    }
  
    //catch any errors
    fetchData()
      .catch(console.error);;
  }, []);


  const renderUsers = users.map((user) => {
    return <User key={user.id} user={user} />
  })

  return (
    <div>
      <button onClick={handleSignOut} className='sign-out'>Sign out</button>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Number of albums</th>
          </tr>
          {renderUsers}
        </thead>
      </table>
    </div>
  )
}

export default Users
