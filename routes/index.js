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

  const url = MAILCHIMP_INT + '.api.mailchimp.com/3.0/lists/' + LIST_ID
  // return mailchimp.post(`lists/${LIST_ID}`, {
  //   update_existing: update !== undefined ? update : true,
  //   members: [
  //     {
  //       email_address: email,
  //       status: 'subscribed',
  //       merge_fields: {
  //         FNAME: firstName,
  //         LNAME: lastName,
  //         AGE: age
  //       }
  //     }
  //   ],
  // }).then(m => {
  //   if (m.errors) {
  //     console.log('Error adding new subscriber to MC', m.errors);
  //   }
  //   return m;
  // }).catch(err => {
  //   console.warn('Failed adding subscriber', email, err);
  // });

  const options = {
    url: url,
    method: 'POST',
    headers: {
      Authorization: MAILCHIMP_KEY
      // 'Content-Type': 'application/json'
    },
    body: postData
  };

  console.log("Mail Chimp Options")
  console.log(options)

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
