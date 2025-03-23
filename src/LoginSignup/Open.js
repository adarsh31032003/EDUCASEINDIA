import React from 'react'
import "./welcome.css"
import { useNavigate } from 'react-router-dom';

const Open = () => {
  const navigate = useNavigate();

  const clickCreate = () => {
    navigate("/SignIn")
  }
  
  const clickAlready = () => {
    navigate("/Login")
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="create-btn" onClick={clickCreate}>Create Account</button>
        <button className="login-btn" onClick={clickAlready}>Already Registered? Login</button>
      </div>
    </div>
  );
}

export default Open
