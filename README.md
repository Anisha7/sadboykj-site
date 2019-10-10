# sadboykj-site
 
<!-- TODO: write a script that runs the backend when front end is run! -->
<!-- TODO: test that api fetch works properly -->
## How to run the app:
    1. Clone the repository.
    2. Open your terminal
    4. Run command: `npm start`

    This should run the server and client at the same time!

# Security
- I created the forms using an input and a custom button that is not affiliated with the form. This prevents SQL injection since we are not accessing or using the URL data in any      way.
- I am checking for malicious input upon the form submit before accepting the value, such that the form would not submit if the value is malicious using regular expressions. 
- Prevented clickjacking by preventing our pages from being used in an iframe on any site other than itself by setting Content-Security-Policy.
