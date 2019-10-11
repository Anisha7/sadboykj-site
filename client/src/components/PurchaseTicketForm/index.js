import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTicketSubmissionSuccess } from '../../actions';
import HomeWrapper from '../HomeWrapper'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { validateFirstName, validateLastName, validateAge } from '../../helpers/InputValidation'
import CheckoutForm from './components/CheckoutForm';
import './styles.css'
import '../../commonStyles.css'


class PurchaseTicketForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            goHome: false,
            goToError: false,
            goToConfirmation: false,
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
                validateAge(age, this.refs.age)
        this.setState({ error : !result})
        return result
    }

    // TODO: Test this function
    sendData() {
        const opts = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            age: this.state.age
        }
        console.log(opts)
        fetch("http://localhost:9000/tickets", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(opts)
        }).then((response) => response.json())
          .then((data) => {
              this.props.updateTicketSubmissionSuccess(data.status)
              this.setState({ goToConfirmation : data.status });
              if (!data.status) {
                this.setState({ goToError : true });
              }
            })
          .catch((err) => {
              this.props.updateTicketSubmissionSuccess(false)
              this.setState({ goToError : true });
          })
        
    }

    render() {
        if (this.state.goHome) {
            return <Redirect to="/" />
        }

        if (this.state.goToConfirmation) {
            return <Redirect to="/confirmation" />
        }

        if (this.state.goToError) {
            return <Redirect to="/error" />
        }

        let error = null
        if (this.state.error) {
            error = <p className="error">Please fix the highlighted input fields!</p>
        }
        
        return (
            <HomeWrapper>
                <FontAwesomeIcon onClick={()=>this.goHome()} className="homeIcon" icon={faHome} size="2x" />
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
                            onChange={(e) => this.setState({ age : parseInt(e.target.value.toString(), 10)})}
                            required />
                    <div>
                        <button onClick={() => {
                            console.log("MADE IT HERE")
                            let valid = this.validateData()
                            if (valid) {
                                this.sendData()
                            }
                        }}> 
                            RESERVE TICKET 
                        </button>
                        {error}
                        {/* Testing stripe UI */}
                        <CheckoutForm />
                    </div>
                </div>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
  
const mapDispatchToProps = () => {
    return {
        updateTicketSubmissionSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(PurchaseTicketForm);