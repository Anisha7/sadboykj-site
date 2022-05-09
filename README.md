# sadboykj-site
Concert Registration Site

https://www.sadboykj.com

APIs
Stripe
Mailchimp
Mandrill
Heroku
 
<!-- TODO:  How to store data even if they didn't pay, yet still allowing multiple tries to pay without exiting the form progress?? -->
## How to run the app:
    1. Clone the repository.
    2. Open your terminal 
    3. `cd` to the repository location
    4. Run command: `npm start`

    This should run the server and client at the same time!

# Security
- I created the forms using an input and a custom button that is not affiliated with the form. This prevents SQL injection since we are not accessing or using the URL data in any way.
- I am checking for malicious input upon the form submit before accepting the value, such that the form would not submit if the value is malicious using regular expressions. (Secure from SQL injection and Cross-Site Scripting)
- Prevented clickjacking by preventing our pages from being used in an iframe on any site other than itself by setting Content-Security-Policy.
