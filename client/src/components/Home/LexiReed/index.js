import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/lexi.png';
import HomeWrapper from '../../HomeWrapper'

class LexiReedHome extends Component {
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
        <HomeWrapper soundcloudLink="https://www.youtube.com/watch?v=ufrZT8pS6Jo" 
                     itunesLink="NONE"
                     instagramLink="https://instagram.com/lexiireed"
                     spotifyLink="NONE">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default LexiReedHome;