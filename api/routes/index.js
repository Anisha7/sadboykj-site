var express = require('express');
var router = express.Router();

// Mandrill Email Service
var nodemailer = require("nodemailer");
var mandrillTransport = require('nodemailer-mandrill-transport');



var smtpTransport = nodemailer.createTransport(mandrillTransport({
  auth: {
    apiKey : '<< put your mandrill api key here >>'
  }
}));

// Signup Route
router.post('/tickets', (req, res) => {
  const { firstName, lastName, age, email } = req.body;

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://<DC>.api.mailchimp.com/3.0/lists/<YOUR_LIST_ID>',
    method: 'POST',
    headers: {
      Authorization: 'auth <YOUR_API_KEY>'
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if (err) {
      res.redirect('/fail.html');
    } else {
      if (response.statusCode === 200) {
        res.redirect('/success.html');
      } else {
        res.redirect('/fail.html');
      }
    }
  });
});

module.exports = router;
