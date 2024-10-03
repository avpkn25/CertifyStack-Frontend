import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import Navbar from '../Navbar/Navbar';

const LoginRegister = () => {
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    }

    const loginLink = () => {
        setAction('');
    }

    return (
        <>
        <Navbar />
        <style>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            } 
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            } 
            .wrapper {
                position: relative;
                width: 420px;
                height: 450px;
                background: transparent;
                border: 2px solid rgba(255, 255, 255, .1);
                backdrop-filter: blur(30px);
                box-shadow: 0 0 10px rgba(0, 0, 0, .2);
                border-radius: 10px;
                color: #fff;
                display: flex;
                align-items: center;
                overflow: hidden;
                transition: height .2s ease;
            }
            .wrapper.active {
                height: 650px;
            }
            .wrapper .form-box {
                width: 100%;
                padding: 40px;
            }
            .wrapper .form-box.login {
                transition: translate .18s ease;
                translate: 0;
            }
            .wrapper.active .form-box.login {
                transition: none;
                translate: -400px;
            }
            .wrapper .form-box.register {
                position: absolute;
                transition: none;
                translate: 400px;
            }
            .wrapper.active .form-box.register {
                transition: translate .18s ease;
                translate: 0;
            }
            form h1 {
                font-size: 36px;
                text-align: center;
            }
            form .input-box {
                position: relative;
                width: 100%;
                height: 50px;
                margin: 30px 0;
            }
            .input-box input {
                width: 100%;
                height: 100%;
                background: transparent;
                border: none;
                outline: none;
                border: 2px solid rgba(255,255, 255, .1);
                border-radius: 40px;
                font-size: 16px;
                color: #fff;
                padding: 20px 45px 20px 20px;
            }
            .input-box input::placeholder {
                color: #fff;
            }
            .input-box .icon {
                position: absolute;
                right: 20px;
                top: 50%;
                translate: 0 -50%;
                font-size: 16px;
            }
            form .remember-forgot {
                display: flex;
                justify-content: space-between;
                font-size: 14.5px;
                margin: -15px 0 15px;
            }
            .remember-forgot label input {
                accent-color: #fff;
                margin-right: 4px;
            }
            .remember-forgot a {
                color: #fff;
                text-decoration: none;
            }
            .remember-forgot a:hover {
                text-decoration: underline;
            }
            form button {
                width: 100%;
                height: 45px;
                background: #fff;
                border: none;
                outline: none;
                border-radius: 40px;
                box-shadow: 0 0 10px rgba(0, 0, 0, .1);
                cursor: pointer;
                font-size: 16px;
                color: #333;
                font-weight: 700;
            }
            form .register-link {
                font-size: 14.5px;
                text-align: center;
                margin: 20px 0 15px;
            }
            .register-link p a {
                color: #fff;
                text-decoration: none;
                font-weight: 600;
            }
            .register-link p a:hover {
                text-decoration: underline;
            }
        `}</style>

        <div className={`wrapper${action}`} >
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="">Forgot Password</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink} >Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Full Name' required />
                        <IoPersonCircle className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Mobile Number' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                    </div>

                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="" onClick={loginLink} >Login</a></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginRegister;
