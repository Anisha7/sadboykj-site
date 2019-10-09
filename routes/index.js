var express = require('express');
var router = express.Router();

const MAILCHIMP_INT = process.env.MAILCHIMP_INT
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY
const MANDRILL_KEY = process.env.MANDRILL_KEY
const LIST_ID = process.env.LIST_ID

// Email Services
const Mailchimp = require('mailchimp-api-v3');
const mailchimp = MAILCHIMP_KEY ? new Mailchimp(MAILCHIMP_KEY) : {};
const mandrill = require('mandrill-api/mandrill');
const mandrill_client = new mandrill.Mandrill(MANDRILL_KEY);

// var host = "smtp.mandrillapp.com"

// Signup Route
// TODO: 
// 1. Get information from front end
// 2. Save the information
// 3. Send status worked or didn't work to front end
// 4. Call a function (let it go off on its own)

router.post('/tickets', (req, res) => {
  const { firstName, lastName, email, age } = req.body;
  res.json({ status: true });

  return

  // MANDRILL
  var mailOptions = {
    "template_name": "sadboy_halloween",
    "template_content": [
        {
          "FNAME": firstName,
        }
    ],
    "message": {
      "from_email":"mgmt@sadboykj.com",
      "from_name":"SAD BOY KJ",
      "to":[{"email":email, "name":firstName, "type":"to"}],
      "subject": "Sad Boy Halloween Confirmation",
    }
  };

  function sendEmail() {
    mandrill_client.messages.sendTemplate(mailOptions, function(res) {
      console.log(res);
    }, function(err) {
      console.log('A mandrill error occurred: ' + err.name + ' - ' + err.message);
    });
  }

});

module.exports = router;
