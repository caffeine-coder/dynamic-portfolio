import React from 'react';
import './signup.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/login');
    return (
        <div className='loginpage'>
        <form className="wrapper">
            <h2>Sign Up</h2>
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
            <section className="group">
                <input
                    type="text"
                    minLength="8"
                    className="input"
                    name="firstname"
                    required
                />
                <label htmlFor="firstname" className="label">
                    First Name
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    minLength="8"
                    className="input"
                    name="lastname"
                    required
                />
                <label htmlFor="lastname" className="label">
                    Last Name
                </label>
            </section>
            <Button type="primary" className="btn">
                Sign Up
            </Button>
            <a onClick={handleClick}>Existing User? Please login up</a>
            <span className="footer"></span>
        </form>
        </div>
    )

}

export default Signup;