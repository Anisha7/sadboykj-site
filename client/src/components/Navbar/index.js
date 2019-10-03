import React, { Component } from 'react';
import { Link } from "react-router-dom";
// TODO: replace this to be a variable such 
// that when backend returns whether it is mobile or web, 
// render different stylesheet
import './styles.css';

class Navbar extends Component {
    render() {
        return (<div className="navbar">
            <ul>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/albums">Albums</Link></li>
            </ul>

            <ul>
                <li><Link to="/" className="title">sadboykj</Link></li>   
            </ul>
            
            <ul>
                {/* 3 main social medias */}
                <li><Link to="www.instagram.com">image</Link></li>
                <li><Link to="www.instagram.com">image</Link></li>
                <li><Link to="www.instagram.com">image</Link></li>
            </ul>
        </div>)
    }
}

export default Navbar;