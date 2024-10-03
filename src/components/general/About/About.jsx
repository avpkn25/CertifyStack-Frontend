import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './About.css';

const About = () => {
  let message = 'qwerty';
  return (
    <div>
      <>
        <Navbar/>
        <div className="about-container">
      <h2>About CertifyStack</h2>
      <p className="about-description">
        CertifyStack is a web application for managing professional certifications. 
        It helps users record certifications, track expiration dates, and handle renewals efficiently. 
        The platform sends automated reminders for renewals and provides secure storage for easy access and verification.
      </p>

      <h3>Team Details</h3>
      <div className="team-section">
        <div className="team-card">
          <h4>P. Vishnu Asrith</h4>
          <p>Team Member</p>
          <p>Student, KL University</p>
          <p>6300036124</p>
        </div>

        <div className="team-card">
          <h4>A. V. Praveen Kumar</h4>
          <p>Team Leader</p>
          <p>Student, KL University</p>
          <p>7893445580</p>
        </div>

        <div className="team-card">
          <h4>M. S. S. Surendra</h4>
          <p>Team Member</p>
          <p>Student, KL University</p>
          <p>9177671162</p>
        </div>
      </div>
    </div>
      </>
    </div>
  )
}

export default About
