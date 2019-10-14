import React, { Component } from './node_modules/react';
import { Redirect } from './node_modules/react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/forghetto.png';
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
        <HomeWrapper soundcloudLink="https://soundcloud.com/510zona" 
                     itunesLink="https://music.apple.com/us/artist/zonaccino/1420222299"
                     instagramLink="https://www.instagram.com/zonaccino" 
                     spotifyLink="https://open.spotify.com/artist/6u7zrSHrCMvA9obfrFrLDj?si=StlWyJUoRnyL19-Slps74g">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default JnyVHome;