import React, { Component } from 'react';
import '../../commonStyles.css'
import './styles.css';
import '../../modules/font-awesome-4.7.0/css/font-awesome.min.css'
import { faInstagram, faSoundcloud, faApple, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {

    render() {
        const soundcloudLink = this.props.soundcloudLink ? this.props.soundcloudLink : "https://soundcloud.com/sadboykj";
        const itunesLink = this.props.itunesLink ? this.props.itunesLink : "https://itunes.apple.com/ca/artist/sad-boy-kj";
        const instagramLink = this.props.instagramLink ? this.props.instagramLink : "https://www.instagram.com/sadboykj/";
        const spotifyLink = this.props.spotifyLink ? this.props.spotifyLink : "https://open.spotify.com/artist/6gfdf0AG7XnQD4wHTPEEwf";

        let soundcloudButton = ''
        let itunesButton = ''
        let instagramButton = ''
        let spotifyButton = ''

        if ( soundcloudLink !== "NONE") {
            soundcloudButton = <a target="_blank" href={ soundcloudLink }><FontAwesomeIcon className="icon" icon={faSoundcloud} size="2x" /></a>
        }
        if ( itunesLink !== "NONE") {
            itunesButton = <a target="_blank" href={ itunesLink }><FontAwesomeIcon className="icon" icon={faApple} size="2x" /></a>
        }
        if ( instagramLink !== "NONE") {
            instagramButton = <a target="_blank" href={ instagramLink }><FontAwesomeIcon className="icon" icon={faInstagram} size="2x" /></a>
        }
        if ( spotifyLink !== "NONE") {
            spotifyButton = <a target="_blank" href={ spotifyLink }><FontAwesomeIcon className="icon" icon={faSpotify} size="2x" /></a>
        }
        

        return (
        <div className="container flex" onMouseEnter={this.handleOnMouseOut}>
            <div><p></p></div>
            <div className="flex">
                { this.props.children }
            </div>
            <div>
                { soundcloudButton }
                { itunesButton }
                { instagramButton }
                { spotifyButton }
            </div>
        </div>)
    }
}

export default Home;