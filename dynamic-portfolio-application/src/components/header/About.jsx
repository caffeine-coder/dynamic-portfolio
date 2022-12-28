import React from 'react';
import { Button, DatePicker, Space, version } from "antd";
import Navbar from '../navbar/NavBar';
import './about.scss'


const About = () => {
    return (
        <div>
        <Navbar/>
        <div className="header">
        <h1 className="textcolor">About Me</h1>
        </div>
        </div>
    )

}

export default About;