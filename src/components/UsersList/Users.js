import React from 'react';
import { useNavigate } from 'react-router-dom';

function Users({user, handleSignOut}) {

  const navigate = useNavigate()

  return (
    <div>
      <img src={user.picture} />
      <h3>{user.name}</h3>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

export default Users
