var express = require('express');
var router = express.Router();

// Mandrill Email Service
var nodemailer = require("nodemailer");
var mandrillTransport = require('nodemailer-mandrill-transport');

const MAILCHIMP_INT = process.env.MAILCHIMP_INT
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY
const MANDRILL_KEY = process.env.MANDRILL_KEY
const LIST_ID = process.env.LIST_ID

// var host = "smtp.mandrillapp.com"

// Signup Route
router.post('/tickets', (req, res) => {
  const { firstName, lastName, email, age } = req.body;
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

  var smtpTransport = nodemailer.createTransport(mandrillTransport({
    auth: {
      apiKey : MANDRILL_KEY
    }
  }));
  
  let mailOptions = {
    from : 'mgmt@sadboykj.com',
    to : email,
    subject : "Sad Boy Showout Reservation",
    html : "Hello"
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
