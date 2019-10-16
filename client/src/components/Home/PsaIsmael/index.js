import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/psaismael.png';

import HomeWrapper from '../../HomeWrapper'

class PsaIsmaelHome extends Component {
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
        <HomeWrapper soundcloudLink="https://soundcloud.com/lil_ish14/glory-days" 
                     itunesLink="NONE"
                     instagramLink="https://www.instagram.com/psa.ismael/" 
                     spotifyLink="NONE">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default PsaIsmaelHome;