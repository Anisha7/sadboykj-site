var express = require('express');
var router = express.Router();

const MAILCHIMP_INT = process.env.MAILCHIMP_INT
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY
const MANDRILL_KEY = process.env.MANDRILL_KEY
const LIST_ID = process.env.LIST_ID

// Mandrill Email Service
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
  console.log("I MADE IT HERE")

  res.json({ status: true })
  return // remove this for below code to run
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

  const postData = JSON.stringify(data);
  const url = MAILCHIMP_INT + '.api.mailchimp.com/3.0/lists/' + LIST_ID

  const options = {
    url: url,
    method: 'POST',
    headers: {
      Authorization: MAILCHIMP_KEY,
      'Content-Type': 'application/json'
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if (err) {
      res.redirect('/error')
    } else {
      if (response.statusCode === 200) {
        // res.redirect('/confirmation');
        console.log("email retrieved")
        res.send(firstName)
      }
    }
  });

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
