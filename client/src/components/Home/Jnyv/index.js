import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/jnyv.png';
import HomeWrapper from '../../HomeWrapper'

class JnyVHome extends Component {
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
        <HomeWrapper soundcloudLink="https://soundcloud.com/officialjny_v" 
                     itunesLink="https://music.apple.com/us/artist/jny-v/1346442082"
                     instagramLink="http://Instagram.com/jny_v" 
                     spotifyLink="https://open.spotify.com/artist/07k8QTozWJl9I8DUW1nKld?si=42u-RPQjQBWwiBm65_yVOQ">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default JnyVHome;