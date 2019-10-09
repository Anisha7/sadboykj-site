var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
// require('../helpers/mailchimp.js')
// console.log("mailchimp.js found!")

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
  // var worker = new Worker('mailchimp.js');

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
  // // const url = MAILCHIMP_INT + '.api.mailchimp.com/3.0/lists/' + LIST_ID + '/members'

  // const options = {
  //     host: 'https://' + MAILCHIMP_INT + '.api.mailchimp.com',
  //     path: '/3.0/lists/' + LIST_ID + '/members', 
  //     // "X-HTTP-Method-Override": PUT,
  //     method: 'POST',
  //     headers: {
  //       // 'Authorization': 'apikey ' + MAILCHIMP_KEY,
  //       'Authorization': MAILCHIMP_KEY,
  //       'Content-Type': 'application/json'
  //     },
  //     body: postData
  // };

  // console.log("Options set for request")
  // console.log(options)

  var options = {
    method: 'POST',
    url: 'https://us20.api.mailchimp.com/3.0/lists/1ffbf98866/members',
    headers: {
      Authorization: 'apikey ' + MAILCHIMP_KEY
    },
    body: postData
  }
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });

  res.json({ status: true })

  // http.request(options, (err, response, body) => {
  //     console.log("We made it!")
  //     if (err) {
  //       console.log("Could not connect to MailChimp")
  //       // console.log(err)
  //       // res.redirect('/error')
  //     } else {
  //       var bodyObj = JSON.parse(body);
  //       console.log(bodyObj.status);
  //       if (response.statusCode === 200) {
  //         // res.redirect('/confirmation');
  //         console.log("email retrieved")
  //         console.log(body)
  //         // res.json(response)
  //       }
  //     }
  // });

  // // MANDRILL
  // var mailOptions = {
  //   "template_name": "sadboy_halloween",
  //   "template_content": [
  //       {
  //         "FNAME": firstName,
  //       }
  //   ],
  //   "message": {
  //     "from_email":"mgmt@sadboykj.com",
  //     "from_name":"SAD BOY KJ",
  //     "to":[{"email":email, "name":firstName, "type":"to"}],
  //     "subject": "Sad Boy Halloween Confirmation",
  //   }
  // };

  // function sendEmail() {
  //   mandrill_client.messages.sendTemplate(mailOptions, function(res) {
  //     console.log(res);
  //   }, function(err) {
  //     console.log('A mandrill error occurred: ' + err.name + ' - ' + err.message);
  //   });
  // }

});

module.exports = router;
