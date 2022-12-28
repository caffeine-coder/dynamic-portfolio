import React from 'react';
import './login.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/signup');
    return (
        <div className='loginpage'>
        <form className="wrapper">
            <h2>LOGIN</h2>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="email"
                    required
                />
                <label htmlFor="email" className="label">
                    Email Id
                </label>
            </section>
            <section className="group">
                <input
                    type="password"
                    minLength="8"
                    className="input"
                    name="password"
                    required
                />
                <label htmlFor="password" className="label">
                    Password
                </label>
            </section>
            <Button type="primary" className="btn">
                LOGIN
            </Button>
            <a onClick={handleClick}>New User? Please sign up</a>
            <span className="footer"></span>
        </form>
        </div>
    )
}
  

export default Login;