import React from 'react';
import "antd/dist/antd.css";
import './landingpage.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => navigate('/login');
    const handleSignupClick = () => navigate('/signup');
    return (
        <div className='landingpage'>
            <div className='container'>
           <div className='welcome'>Welcome!</div>
           <div className='message'>Let's create a portfolio for you!</div>
           <Button className='login' type="primary" onClick={handleLoginClick}> Login</Button>
           <Button className='signup' type="primary" onClick={handleSignupClick}>Sign Up</Button>
           </div>
        </div>
    )
}

export default LandingPage;