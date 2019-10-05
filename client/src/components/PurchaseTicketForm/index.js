import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import HomeWrapper from '../HomeWrapper/'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

class PurchaseTicketForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            goHome: false,
            name: '',
            email: '',
            age: 0,
        }
    }

    goHome() {
        this.setState({ goHome: true })
    }

    validateData() {

    }

    render() {
        if (this.state.goHome) {
            return <Redirect to="/" />
        }

        // name
        // email
        // age (send int to backend) --> 1-90
        return (
            <HomeWrapper>
                <FontAwesomeIcon onClick={()=>this.goHome()} className="backIcon" icon={faArrowLeft} size="2x" />
                <div className="ticketForm">
                    <input  name="fullname" 
                            placeholder="Full name" 
                            value={this.state.name} 
                            onChange={(e) => this.setState({ name : e.target.value})} />
                    <input  name="email" 
                            placeholder="Email" 
                            type="email" 
                            value={this.state.email} 
                            onChange={(e) => this.setState({ name : e.target.email})} />
                    <input  name="age" 
                            placeholder="Age" 
                            type="number" value={this.state.age} 
                            onChange={(e) => this.setState({ age : e.target.value})} />
                    {/* <input type="submit" value="Get Free Ticket" onSubmit={() => console.log("HELLO")} /> */}
                    <button className="submitButton" onClick={() => console.log("CLICKED")}> GET FREE TICKET </button>
                </div>
            </HomeWrapper>
        )
    }
}

export default PurchaseTicketForm;