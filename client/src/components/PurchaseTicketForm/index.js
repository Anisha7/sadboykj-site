import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import HomeWrapper from '../HomeWrapper/'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {validateFirstName, validateLastName, validateAge, validateEmail} from '../../helpers/InputValidation/'
import './styles.css'


class PurchaseTicketForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            goHome: false,
            firstName: '',
            lastName: '',
            email: '',
            age: 0,
            error: false,
        }
    }

    goHome() {
        this.setState({ goHome: true })
    }

    validateData() {
        const { firstName, lastName, email, age } = this.state
        const result = validateFirstName(firstName, this.refs.firstName) & 
                validateLastName(lastName, this.refs.lastName) &
                validateAge(age, this.refs.age) &
                validateEmail(email, this.refs.email)
        this.setState({ error : !result})
        return result
    }

    render() {
        if (this.state.goHome) {
            return <Redirect to="/" />
        }

        let error = <p></p>
        if (this.state.error) {
            error = <p class="error">Please fix the highlighted input fields!</p>
        }
        console.log(error)
        
        return (
            <HomeWrapper>
                <FontAwesomeIcon onClick={()=>this.goHome()} className="backIcon" icon={faArrowLeft} size="2x" />
                <div className="flex eventName">
                    <h1>SAD BOY SHOWOUT</h1>
                    <h2>HALLOWEEN</h2>
                </div>
                <div className="flex">
                    <input  ref="firstName"
                            name="firstName" 
                            placeholder="First name" 
                            value={this.state.firstName} 
                            onChange={(e) => this.setState({ firstName : e.target.value})}
                            required />
                    <input  ref="lastName"
                            name="lastName" 
                            placeholder="Last name" 
                            value={this.state.lastName} 
                            onChange={(e) => this.setState({ lastName : e.target.value})} 
                            required />
                    <input  ref="email"
                            name="email" 
                            placeholder="Email" 
                            type="email" 
                            value={this.state.email} 
                            onChange={(e) => this.setState({ email : e.target.value})}
                            required />
                    <input  ref="age"
                            name="age" 
                            placeholder="Age" 
                            type="number" value={this.state.age} 
                            onChange={(e) => this.setState({ age : e.target.value})}
                            required />
                    <div>
                        <button className="submitButton" onClick={() => this.validateData()}> GET FREE TICKET </button>
                        {error}
                    </div>
                </div>
            </HomeWrapper>
        )
    }
}

export default PurchaseTicketForm;