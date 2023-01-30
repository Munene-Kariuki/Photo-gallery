import React from 'react'
import LoginForm from './LoginForm'

function Login({onLogIn}) {

  return (
    <div>
      <h2>Picturesque</h2>
      <LoginForm onlogin={onLogIn}  />
    </div>
  )
}

export default Login
