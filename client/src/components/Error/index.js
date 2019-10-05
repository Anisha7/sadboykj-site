import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './styles.css';
import '../../commonStyles.css'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomeWrapper from '../HomeWrapper/'

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getTickets: false,
        }
    }

    render() {
        if (this.state.getTickets) {
            return <Redirect to="/tickets" />
        }
        return (
        <HomeWrapper>
            <FontAwesomeIcon icon={faSadTear} size="4x" />
            <h1>OOPS!</h1>
            <p>Your request didn't go through!</p>
            <button onClick={() => this.setState({ getTickets : true})}>TRY AGAIN</button>
        </HomeWrapper>)
    }
}

export default Error;