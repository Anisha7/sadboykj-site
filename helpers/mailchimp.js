// Email Services
const MAILCHIMP_INT = process.env.MAILCHIMP_INT
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY
const LIST_ID = process.env.LIST_ID

var mailchimp_log = function(email, firstName, lastName, age) {
    const data = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        AGE: age
        }
    };
    
    console.log("Data put into Mailchimp format")
    const postData = JSON.stringify(data);

    var options = {
        method: 'POST',
        url: 'https://' + MAILCHIMP_INT + '.api.mailchimp.com/3.0/lists/' + LIST_ID + '/members',
        headers: {
            Authorization: 'apikey ' + MAILCHIMP_KEY
        },
        body: postData
    }
    
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    });
}

module.exports = mailchimp_log;