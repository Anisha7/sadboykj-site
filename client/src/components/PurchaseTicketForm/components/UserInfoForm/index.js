import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { validateFirstName, validateLastName, validateAge } from '../../../../helpers/InputValidation'
// import './styles.css'
import '../../../../commonStyles.css'

class UserInfoForm extends Component {
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

    validateData() {
        const { firstName, lastName, age } = this.state
        const result = validateFirstName(firstName, this.refs.firstName) & 
                validateLastName(lastName, this.refs.lastName) &
                validateAge(age, this.refs.age)
        this.setState({ error : !result})
        return result
    }

    render() {
        if (this.state.goHome) {
            return <Redirect to="/" />
        }

        if (this.state.goToConfirmation) {
            return <Redirect to="/confirmation" />
        }

        let error = null
        if (this.state.error) {
            error = <p className="error">Please fix the highlighted input fields!</p>
        }
        
        return (
            <div>
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
                            type="number"
                            onChange={(e) => this.setState({ age : parseInt(e.target.value.toString(), 10)})}
                            required />
                    <div>
                        <button onClick={() => {
                            console.log("MADE IT HERE")
                            let valid = this.validateData()
                            if (valid) {
                                this.props.updateState({
                                    firstName: this.state.firstName,
                                    lastName: this.state.lastName,
                                    email: this.state.email,
                                    age: this.state.age,
                                    paymentSuccess: false 
                                })
                            }
                        }}> 
                            NEXT 
                        </button>
                        {error}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfoForm;