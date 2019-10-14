import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/jaimecope.png';
import HomeWrapper from '../../HomeWrapper'

class JaimeCopeHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToTicketForm: false,
        }
    }

    render() {
        if (this.state.redirectToTicketForm) {
            return <Redirect to='/tickets' />
        }
        return (
        <HomeWrapper soundcloudLink="https://soundcloud.com/jaimecope" 
                     itunesLink="https://music.apple.com/us/artist/jaime-cope/1447456484"
                     instagramLink="https://www.instagram.com/jaimecope" 
                     spotifyLink="https://open.spotify.com/artist/74NHGPjDif9KNh36oGp7th?si=J1hdp5xkTZyRaiOFvlH1MA">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default JaimeCopeHome;