import { combineReducers } from 'redux'
import { TICKET_SUBMISSION_SUCCESS } from '../actions'

const ticketSubmissionReducer = (state = [], action) => {
    switch(action.type) {
      case TICKET_SUBMISSION_SUCCESS:
        const success = action.payload
        return success
  
      default:
        return state
    }
};

export default combineReducers({
    ticketSubmissionSuccess: ticketSubmissionReducer
})