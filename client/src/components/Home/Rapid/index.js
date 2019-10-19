import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/rapid.png';
import HomeWrapper from '../../HomeWrapper'

class RapidHome extends Component {
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
        <HomeWrapper soundcloudLink="NONE" 
                     itunesLink="NONE"
                     instagramLink="NONE" 
                     spotifyLink="NONE">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default RapidHome;