import React from 'react';
import Header from '../header/About';
import "antd/dist/antd.css";
import './home.scss'
import Navbar from '../navbar/NavBar';


const Home = () => {
    return (
        <div>
        <Navbar/>
        <div className="home">
            <h1 className="textcolor">This is homepage</h1>
        </div>
        </div>
    )

}

export default Home;