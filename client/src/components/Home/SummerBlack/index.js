import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/summerblack.png';
import HomeWrapper from '../../HomeWrapper'

class SummerBlackHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToTicketForm: false,
        }
    }

    render() {
        if (this.state.redirectToTicketForm) {
            return <Redirect to='/tickets' />
        }
        return (
        <HomeWrapper soundcloudLink="https://m.soundcloud.com/summerblak" 
                     itunesLink="https://music.apple.com/us/artist/summer-black/1451006590"
                     instagramLink="https://www.instagram.com/summerblak/" 
                     spotifyLink="https://open.spotify.com/artist/2pj4FnGKErpthAl38G2Yfj?si=AFvsqOeUSICfcGUlE9ZYGg">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default SummerBlackHome;