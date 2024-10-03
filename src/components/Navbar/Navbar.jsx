import React from 'react'
import './Navbar.css'
import LoginRegister from '../LoginRegister/LoginRegister';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">CertifyStack</Link>

        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/certifications" >Certifications</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >Contact</Link>
            <Link to="/login">Login</Link>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
