export const TICKET_SUBMISSION_SUCCESS = "TICKET_SUBMISSION_SUCCESS"

export const updateTicketSubmissionSuccess = (success) => {
    return {
      type: TICKET_SUBMISSION_SUCCESS,
      payload: success
    }
  }