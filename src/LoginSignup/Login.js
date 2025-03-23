import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter the details");
      return;
    }

    let getDetails = JSON.parse(localStorage.getItem("user")) || [];
    
    let userExists = getDetails.some(
      (currValue) => currValue.email === email && currValue.password === password
    );

    if (userExists) {
      alert("Congratulations! Login Successfull!!!");
      navigate("/Home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="title">Sign in to your</h2>
        <h2 className="title">PopX account</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="input"
              value={email}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input"
              value={password}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="button" disabled={!email || !password}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
