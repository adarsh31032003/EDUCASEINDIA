import React, { useState } from 'react'
import "./home.css"

const Home = () => {
  const [image, setImage] = useState("https://via.placeholder.com/100");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <div className="profile">
        <div className="image-container">
          <img src={image} alt="Profile" className="profile-image" />
          <label className="camera-icon">
            📷
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
        </div>
        <div className="info">
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
            Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home
