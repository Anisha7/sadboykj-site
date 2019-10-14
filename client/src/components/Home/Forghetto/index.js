import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/forghetto.png';
import HomeWrapper from '../../HomeWrapper'

class ForghettoHome extends Component {
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
        <HomeWrapper soundcloudLink="http://soundcloud.com/forghetto" 
                     itunesLink="https://music.apple.com/us/artist/forghetto/1216951397"
                     instagramLink="https://www.instagram.com/forghetto/" 
                     spotifyLink="https://open.spotify.com/artist/0FSvkpAhgNFvb75II6Kfaw?nd=1">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default ForghettoHome;