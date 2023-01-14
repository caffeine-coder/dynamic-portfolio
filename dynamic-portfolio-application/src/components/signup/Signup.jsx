import React, { useState } from 'react';
import axios from 'axios';
import './signup.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Alert, message, Spin } from 'antd';


const Signup = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
      emailId: '',
      firstName: '',
      lastName: '',
      password: '',
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (event) => {
      const { name, value } = event.target;
      setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);
      axios.post('http://localhost:8090/portfolio/signup', state)
        .then(response => {
          if (response.data.responseCode === '200') {
            message.success('Sign up successful, Procced with login', 2, () => {
              setIsLoading(false);
              navigate('/login')
            });
          } else {
            setIsLoading(false);
            setError(response.data.message);
          }
        })
        .catch(error => {
          setIsLoading(false);
          setError('Registration Failed');
        });
    };
    const handleClick = () => navigate('/login');
    return (
        <div className='loginpage'>
           {error && <Alert message={error} type="error" />}
           <Spin spinning={isLoading}>
        <form className="wrapper" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="emailId"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="emailId" className="label">
                    Email Id
                </label>
            </section>
            <section className="group">
                <input
                    type="password"
                    className="input"
                    name="password"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="password" className="label">
                    Password
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    className="input"
                    name="firstName"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="firstName" className="label">
                    First Name
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    className="input"
                    name="lastName"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="lastName" className="label">
                    Last Name
                </label>
            </section>
            <Button type="primary" htmlType="submit" className="btn">
                Sign Up
            </Button>
            <a onClick={handleClick}>Existing User? Please login up</a>
            <span className="footer"></span>
        </form>
        </Spin>
        </div>
    )

}

export default Signup;