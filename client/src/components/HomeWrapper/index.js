import React, { Component } from 'react';
import './styles.css';
import '../../modules/font-awesome-4.7.0/css/font-awesome.min.css'
import { faInstagram, faSoundcloud, faApple, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/logo.png';

class Home extends Component {
    render() {
        return (
        <div className="container flex" onMouseEnter={this.handleOnMouseOut}>
            <img src={logo} className="logo" alt="logo" />
            {/* add an on  */}
            <div className="flex">
                {this.props.children}
            </div>
            <div>
                <a target="_blank" href="https://soundcloud.com/sadboykj"><FontAwesomeIcon className="icon" icon={faSoundcloud} size="2x" /></a>
                <a target="_blank" href="https://itunes.apple.com/ca/artist/sad-boy-kj"><FontAwesomeIcon className="icon" icon={faApple} size="2x" /></a>
                <a target="_blank" href="https://www.instagram.com/sadboykj/"><FontAwesomeIcon className="icon" icon={faInstagram} size="2x" /></a>
                <a target="_blank" href="https://open.spotify.com/artist/6gfdf0AG7XnQD4wHTPEEwf"><FontAwesomeIcon className="icon" icon={faSpotify} size="2x" /></a>
            </div>
        </div>)
    }
}

export default Home;