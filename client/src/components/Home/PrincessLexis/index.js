import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../../../commonStyles.css'
import '../styles.css';
import cover from '../../../assets/princesslexis.png';
import HomeWrapper from '../../HomeWrapper'

class PrincessLexisHome extends Component {
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
        <HomeWrapper soundcloudLink="https://soundcloud.com/princess_lexis" 
                     itunesLink="https://music.apple.com/us/album/does-it-ever-cross-ur-mind-feat-xanibus-vazh/1459864430?i=1459864649"
                     instagramLink="https://www.instagram.com/princesslexis._/" 
                     spotifyLink="https://open.spotify.com/track/41KmP3xZVpC7xDiyFKPbe0?si=WCniMYdYT1azTptHvCC4OQ">
            <img src={cover} className="cover" alt="cover" onClick={() => this.setState({ redirectToTicketForm : true })} />
        </HomeWrapper>)
    }
}

export default PrincessLexisHome;