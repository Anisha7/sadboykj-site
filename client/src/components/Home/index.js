import React, { Component } from 'react';
import './styles.css';
import '../../modules/font-awesome-4.7.0/css/font-awesome.min.css'
import logo from '../../assets/logo.png';
import cover from '../../assets/testcover3.png';
import { faInstagram, faSoundcloud, faApple, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
    render() {
        return (
        <div className="container flex">
            <img src={logo} className="logo" alt="logo" />
            <div className="flex">
                {/* <img src={text} className="text" alt="Sad Boy Show Out Halloween" /> */}
                <img src={cover} className="cover" alt="cover" />
                <p>Get Tickets</p>
            </div>
            <div>
                <a target="_blank" href="https://open.spotify.com/artist/6gfdf0AG7XnQD4wHTPEEwf"><FontAwesomeIcon className="icon" icon={faSpotify} size="2x" /></a>
                <a target="_blank" href="https://soundcloud.com/sadboykj"><FontAwesomeIcon className="icon" icon={faSoundcloud} size="2x" /></a>
                <a target="_blank" href="https://itunes.apple.com/ca/artist/sad-boy-kj"><FontAwesomeIcon className="icon" icon={faApple} size="2x" /></a>
                <a target="_blank" href="https://www.instagram.com/sadboykj/"><FontAwesomeIcon className="icon" icon={faInstagram} size="2x" /></a>
            </div>
        </div>)
    }
}

export default Home;