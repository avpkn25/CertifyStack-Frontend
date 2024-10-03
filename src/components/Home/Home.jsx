import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css';
import LoginRegister from '../LoginRegister/LoginRegister';

const Home = () => {
  return (
    <div>
      <>
        <Navbar/>
        <div className="home container">
          <div className="home-text">
            <h1>Welcome to Certify Stack</h1>
            <p>This is a best way to Track,</p>
            <p>Manage and Verify your certificates</p>
            <button className="home-btn"  >get Started</button>
          </div>
        </div>
      </>
    </div>
  )
}

export default Home
