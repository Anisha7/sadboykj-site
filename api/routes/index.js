var express = require('express');
var router = express.Router();

// Mandrill Email Service
var nodemailer = require("nodemailer");
var mandrillTransport = require('nodemailer-mandrill-transport');

// Secret Stuff
const MAILCHIMP_INT = process.env.MAILCHIMP_INT
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY
const MANDRILL_KEY = process.env.MANDRILL_KEY
const LIST_ID = process.env.LIST_ID

// var host = "smtp.mandrillapp.com"

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
          LNAME: lastName,
          AGE: age
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'us20.api.mailchimp.com/3.0/lists/1ffbf98866',
    method: 'POST',
    headers: {
      Authorization: apikeyMAILCHIMP_KEY,
      'Content-Type': 'application/json'
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if (err) {
      res.redirect('/error')
    } else {
      if (response.statusCode === 200) {
        res.redirect('/confirmation');
        res.send(firstName)
      }
    }
  });

  var smtpTransport = nodemailer.createTransport(mandrillTransport({
    auth: {
      apiKey : process.env.MANDRILL_KEY
    }
  }));
  
  let mailOptions = {
    from : 'youremail@domain.com',
    to : 'reciver@domain.com',
    subject : "This is from Mandrill",
    html : "Hello,<br>Sending this email using Node and Mandrill"
  };
  
  // Sending email.
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error) {
      throw new Error("Error in sending email");
    }
    console.log("Message sent: " + JSON.stringify(response));
  });
});

module.exports = router;
