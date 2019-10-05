import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTicketSubmissionSuccess } from '../../actions';
import HomeWrapper from '../HomeWrapper'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {validateFirstName, validateLastName, validateAge, validateEmail} from '../../helpers/InputValidation'
import './styles.css'
import '../../commonStyles.css'


class PurchaseTicketForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            goHome: false,
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
                validateAge(age, this.refs.age) &
                validateEmail(email, this.refs.email)
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
        let success = false
        fetch("http://localhost:9000/tickets", {
            method: 'post',
            body: JSON.stringify(opts)
        }).then((response) => response.json())
          .then((data) => {
              console.log('Created Gist:', data)
              success = true
            })
          .catch((err) => {
              // TODO: Test if this catches errors sent from the backend
              // In case adding to database failed or something
              // went wrong server side. Otherwise, check for that 
              // case to update ticketSubmissionSuccess
              console.log(err.text())
              success = false
          })
        this.props.updateTicketSubmissionSuccess(success)
    }

    render() {
        if (this.state.goHome) {
            return <Redirect to="/" />
        }

        if (this.state.goToConfirmation) {
            return <Redirect to="/confirmation" />
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
                        <button onClick={() => {
                            const valid = this.validateData()
                            if ( valid ) {
                                this.sendData();
                                this.setState({ goToConfirmation : true });
                            }
                        }}> RESERVE TICKET </button>
                        {error}
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