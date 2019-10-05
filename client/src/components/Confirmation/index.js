import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../commonStyles.css';
import './styles.css';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeWrapper from '../HomeWrapper/';

class TicketConfirmation extends Component {

    render() {
        if ( !this.props.ticketSubmissionSuccess ) {
            return <Redirect to="/error" />
        }
        
        return (
        <HomeWrapper>
            <FontAwesomeIcon icon={faCheckSquare} size="4x" />
            <h1>TICKET RESERVED!</h1>
            <div className="reservationDetails">
                <p>Event:</p> 
                <div>
                    <p>SAD BOY SHOW OUT</p> 
                    <p>HALLOWEEN</p>
                </div>
                <p>Date:</p> 
                <p>Nov 1, 2019</p>
                <p>Location: </p>
                <p>Jack London Aquatic Center</p>
                <p>Details:</p> 
                <p>Pay at the door</p>
            </div>
        </HomeWrapper>)
    }
}


const mapStateToProps = (state) => {
    return {
        ticketSubmissionSuccess: state.ticketSubmissionSuccess
    }
  }
  
export default connect(mapStateToProps)(TicketConfirmation);