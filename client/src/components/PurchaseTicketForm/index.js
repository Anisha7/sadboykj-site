import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import HomeWrapper from '../HomeWrapper/'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PurchaseTicketForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            goHome: false,
        }
    }

    goHome() {
        this.setState({ goHome: true })
    }

    render() {
        if (this.state.goHome) {
            return <Redirect to="/" />
        }

        return (
            <HomeWrapper>
                <FontAwesomeIcon onClick={()=>this.goHome()} className="icon" icon={faArrowLeft} size="2x" />
                <form>
                    <input name="fullname" placeholder="Full name" />
                </form>
            </HomeWrapper>
        )
    }
}

export default PurchaseTicketForm;