import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTicketSubmissionSuccess } from '../../actions';
import HomeWrapper from '../HomeWrapper'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckoutForm from './components/CheckoutForm';
import './styles.css'
import '../../commonStyles.css'
import UserInfoForm from './components/UserInfoForm';

class PurchaseTicketForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            goHome: false,
            error: false,
            userInfo: { firstName: '',
                         lastName: '',
                         email: '',
                         age: 0,
                         paymentSuccess: false 
                        },
            infoRetrieved: false,
        }
    }

    sendData() {
        console.log("SENDING DATA...")
        fetch("/tickets", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.userInfo)
        }).then((response) => response.json())
          .then((data) => {
              console.log("STATUS: ", data.status)
              this.props.updateTicketSubmissionSuccess(data.status)
              if (!data.status) {
                this.setState({ error : true });
              }
            })
          .catch((err) => {
              console.log(err)
              this.props.updateTicketSubmissionSuccess(false)
              this.setState({ error : true });
          })
        
    }

    checkoutSucceeded() {
        this.setState({ userInfo: {
            firstName: this.state.userInfo.firstName,
            lastName: this.state.userInfo.lastName,
            email: this.state.userInfo.email,
            age: this.state.userInfo.age,
            paymentSuccess: true
        }})
    }

    render() {
        if (this.state.goHome) {
            return <Redirect to="/" />
        }

        if (this.state.userInfo.paymentSuccess) {
            console.log("I AM HERE!!!!!!!!!!!")
            console.log(this.state.userInfo.paymentSuccess)
            this.sendData()
            console.log("SENT DATA. REDIRECTING TO CONFIRMATION")
            return <Redirect to="/confirmation" />
        }

        let form = <UserInfoForm updateState={(val) => {
            this.setState({ userInfo : val });
            this.setState({ infoRetrieved: true })
            }} />
        if ( this.state.infoRetrieved ) {
            form = <CheckoutForm updateState={(val) => this.setState({ userInfo : val })} 
                                 name={ this.state.firstName + " " + this.state.lastName } 
                                 succeeded={() => this.checkoutSucceeded()} />
        }
        
        return (
            <HomeWrapper>
                <FontAwesomeIcon onClick={() => {this.setState({ goHome: true })}} className="homeIcon" icon={faHome} size="2x" />
                { form }
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