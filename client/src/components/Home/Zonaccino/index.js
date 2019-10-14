import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/zonaccino.png';
// import cover from '../../assets/testcover3.png'; // this has the event name

import HomeWrapper from '../../HomeWrapper'

class ZonaccinoHome extends Component {
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
        <HomeWrapper soundcloudLink="https://soundcloud.com/510zona" 
                     itunesLink="https://music.apple.com/us/artist/zonaccino/1420222299" 
                     instagramLink="https://www.instagram.com/zonaccino/" 
                     spotifyLink="https://open.spotify.com/artist/6u7zrSHrCMvA9obfrFrLDj?si=StlWyJUoRnyL19-Slps74g">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
            {/* <button onClick={() => this.setState({ redirectToTicketForm : true })} className="ticketButton">GET TICKETS</button> */}
        </HomeWrapper>)
    }
}

export default ZonaccinoHome;