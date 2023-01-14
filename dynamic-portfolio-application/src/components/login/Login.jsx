import React, { useState } from 'react';
import './login.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, message, Spin } from 'antd';

function Login() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/signup');

    const [state, setState] = useState({
      emailId: '',
      password: '',
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
      setError(null);
      const { name, value } = event.target;
      setState((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);
    axios.post('http://localhost:8090/portfolio/login', state)
      .then(response => {
        if (response.data.responseCode === '200') {
          message.success("Login Successful", 1, () => {
          setIsLoading(false);
          navigate('/home')
        });
        } else {
          setIsLoading(false);
          setError(response.data.message);
        }
      })
      .catch(error => {
        setIsLoading(false);
        setError('Invalid Credentials');
      });
    };

    return (
        <div className='loginpage'>
          {error && <Alert  showIcon message={error} closable type="error" />}
          <Spin spinning={isLoading}>
        <form className="wrapper" onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="emailId"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="email" className="label">
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
            <Button type="primary" htmlType="submit" className="btn">
                LOGIN
            </Button>
            <a onClick={handleClick}>New User? Please sign up</a>
            <span className="footer"></span>
        </form>
        </Spin>
        </div>
    )
}
  

export default Login;