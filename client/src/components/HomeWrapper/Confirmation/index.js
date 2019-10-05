import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './styles.css';
import HomeWrapper from '../HomeWrapper'

class TicketConfirmation extends Component {

    render() {
        return (
        <HomeWrapper>
            <h1>TICKET RESERVED!</h1>
            <p>Event: SAD BOY SHOW OUT: HALLOWEEN</p>
            <p>Date: Nov 1, 2019</p>
            <p>Location: Jack London Aquatic Center</p>
            <p>Details: Pay at the door</p>
        </HomeWrapper>)
    }
}

export default TicketConfirmation;