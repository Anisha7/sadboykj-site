var express = require('express');
var router = express.Router();
var request = require('request');
var validation = require('./inputValidation')
var email_validator = require("email-validator");
const stripe = require("stripe")(process.env);

const MAILCHIMP_INT = process.env.MAILCHIMP_INT
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY
const MANDRILL_KEY = process.env.MANDRILL_KEY
const LIST_ID = process.env.LIST_ID
const FROM_EMAIL = process.env.FROM_EMAIL
const STRIPE_SECRET = process.env.STRIPE_SECRET

// Email Services
const stripe = require("stripe")(STRIPE_SECRET);
const mandrill = require('mandrill-api/mandrill');
const mandrill_client = new mandrill.Mandrill(MANDRILL_KEY);

// Charge Route 
router.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Sad Boy Showout Admission",
      source: req.body
    });
    // Send status
    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

// Signup Route
router.post('/tickets', (req, res) => {
  // Get information from front end
  const { firstName, lastName, email, age, paymentSuccess } = req.body;
  if (!(validation.validateFirstName(firstName) && 
      validation.validateLastName(lastName) &&  
      validation.validateAge(age) &&
      email_validator.validate(email))) {
    console.log("FAILED :(")
    res.json({ status: false })
    return
  }

  // If payment is a success
  if (paymentSuccess) {
    paid = "True";
  } else {
    paid = "False";
  };

  // MAILCHIMP
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      AGE: age,
      PAID: paid
    }
  };

  const postData = JSON.stringify(data);

  // 2. Save the information to Mailchimp
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

  // 3. Send status worked or didn't work to front end
  res.json({ status: true })

  // 4. Send email confirmation
  var template_name = "sadboy_halloween"
  var template_content = [{
      "FNAME": firstName,
    }];
  var message = {
      "from_email": FROM_EMAIL,
      "from_name": "SAD BOY KJ",
      "to":[{"email": email, "name": firstName}],
      "subject": "Sad Boy Halloween Confirmation",
  };

  // Set time to send email
  var d = new Date();
  d = new Date(d.getTime() - 3000000);
  var send_at = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
  var async = false;
  var ip_pool = "Main Pool";

  // SEND THE EMAIL
  mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
    console.log(result);
  }, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
  });
});

module.exports = router;
