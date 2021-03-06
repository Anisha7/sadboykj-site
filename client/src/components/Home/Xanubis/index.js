import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/xanubis.png';

import HomeWrapper from '../../HomeWrapper'

class XanubisHome extends Component {
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
        <HomeWrapper soundcloudLink="https://soundcloud.com/xan-ubis" 
                     itunesLink="https://music.apple.com/us/artist/xanubis/1345373634" 
                     instagramLink="https://www.instagram.com/xanubis/" 
                     spotifyLink="https://open.spotify.com/artist/74n1PorsDN4phxsKNzcYxh?si=ZFzpkRvUT1C4jgwjIKgIvw">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default XanubisHome;