import React, { useState } from 'react';
import './LoginForm.css';
import Error from './Error';

function LoginForm(onlogin) {
  
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //update form data
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //Handle log in form submit
  function handleSubmit(e) {
    e.preventDefault() 
    setIsLoading(true) 
    fetch('/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(formData),
    }).then((res) => {
      setIsLoading(false)
      if (res.ok) {
        res.json() 
        .then((user) => onlogin(user));
      } 
      else {
        res.json() 
        .then((err) => setErrors(err.errors));
      }
    });
    setFormData({
      username: "",
      password: "" 
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input placeholder="Username..." type='text' name="username" onChange={handleChange} value={formData.username} /> 
        <input placeholder="Password..." type='password' name="password" onChange={handleChange} value={formData.password} /> 
        <input type='submit' value={isLoading ? "Logging in..." : "Login"} />
      </form>
      {errors.map((error) => {
        return <Error key={error} error={error} />
      })}
    </div>
  )
}

export default LoginForm
