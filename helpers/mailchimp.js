const MAILCHIMP_INT = process.env.MAILCHIMP_INT
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY
const LIST_ID = process.env.LIST_ID

// Email Services
const Mailchimp = require('mailchimp-api-v3');
const mailchimp = MAILCHIMP_KEY ? new Mailchimp(MAILCHIMP_KEY) : {};

module.exports = function mailchimp_log(email, firstName, lastName, age) {
    // MAILCHIMP
    const data = {
        members: [
        {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
            AGE: age
            }
        }
        ]
    };

    console.log("Data put into Mailchimp format")
    const postData = JSON.stringify(data);
    console.log(postData)

    const url = MAILCHIMP_INT + '.api.mailchimp.com/3.0/lists/' + LIST_ID

    const options = {
        url: url,
        method: 'POST',
        headers: {
          'Authorization': MAILCHIMP_KEY,
          'Content-Type': 'application/json'
        },
        body: postData
    };

    console.log("Options set for request")

    request(options, (err, response, body) => {
        console.log("We made it!")
        if (err) {
          console.log("Could not connect to MailChimp")
          // res.redirect('/error')
        } else {
          if (response.statusCode === 200) {
            // res.redirect('/confirmation');
            console.log("email retrieved")
            // res.json(response)
          }
        }
    });
}