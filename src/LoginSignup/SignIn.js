import React from 'react'
import { useState } from 'react';
import "./styless.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.fullName==""||formData.phoneNumber==""||formData.email==""||formData.password==""||formData.companyName==""||formData.isAgency==""){
      alert("Please enter all your Details")
    } else {
    const getData = JSON.parse(localStorage.getItem("user")||"[]");
    let arr=[];
    arr=[...getData];
    arr.push(formData)
    localStorage.setItem("user",JSON.stringify(arr))
    alert("Congratulations Signup Successfull!!!")
    navigate("/Home")
    }
  }

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="title">Create your</h2>
        <h2 className="title">PopX account</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label">Full Name<span>*</span></label>
            <input type="text" name="fullName" placeholder="Enter full name" className="input" value={formData.fullName} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="label">Phone number<span>*</span></label>
            <input type="text" name="phoneNumber" placeholder="Enter phone number" className="input" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="label">Email address<span>*</span></label>
            <input type="email" name="email" placeholder="Enter email address" className="input" value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="label">Password<span>*</span></label>
            <input type="password" name="password" placeholder="Enter password" className="input" value={formData.password} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="label">Company name</label>
            <input type="text" name="companyName" placeholder="Enter company name" className="input" value={formData.companyName} onChange={handleChange} />
          </div>
          <div className="radio-group">
            <p>Are you an Agency?<span>*</span></p>
            <label>
              <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === "yes"} onChange={handleChange} /> Yes
            </label>
            <label>
              <input type="radio" name="isAgency" value="no" checked={formData.isAgency === "no"} onChange={handleChange} /> No
            </label>
          </div>
          <button type="submit" className="button">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login
