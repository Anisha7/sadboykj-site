import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import cover from '../../assets/cover.png';

class Home extends Component {
    render() {
        return (
        <div className="container flex">
            <img src={logo} className="logo" alt="logo" />
            <div className="flex">
                <img src={cover} className="cover" alt="cover" />
                <p>Get Tickets</p>
            </div>
            <div>
                <p>Socials</p>
            </div>
        </div>)
    }
}

export default Home;