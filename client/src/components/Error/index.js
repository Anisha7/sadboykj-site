import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './styles.css';
import '../../commonStyles.css'
import { faSadTear, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomeWrapper from '../HomeWrapper'

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getTickets: false,
            goHome: false,
        }
    }

    render() {
        if (this.state.getTickets) {
            return <Redirect to="/tickets" />
        }
        
        if ( this.props.ticketSubmissionSuccess ) {
            return <Redirect to="/confirmation" />
        }

        if (this.state.goHome) {
            return <Redirect to="/" />
        }

        return (
        <HomeWrapper>
            <FontAwesomeIcon onClick={()=>this.setState({ goHome:true })} className="homeIcon" icon={faHome} size="2x" />
            <FontAwesomeIcon icon={faSadTear} size="4x" />
            <h1>OOPS!</h1>
            <p>Your request didn't go through!</p>
            <button onClick={() => this.setState({ getTickets : true})}>TRY AGAIN</button>
        </HomeWrapper>)
    }
}

const mapStateToProps = (state) => {
    return {
        ticketSubmissionSuccess: state.ticketSubmissionSuccess
    }
  }
  
export default connect(mapStateToProps)(Error);