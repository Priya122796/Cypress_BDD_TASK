Feature: Create an Account in Luna and Sign in

    Feature Signup page will work depending on the user credentials.

    Background:
        Given A user Creates a new Account and Signin again in Luna website

    Scenario: Create a new account
        When A user clicks on the Create an Account button
        And A user enters the firstname 
        And A user enters the lastname 
        And A user enters the emailaddress 
        And A user enters the mainpassword 
        And A user enters the confirmation 
        And A user clicks on the submit button
        Then the url is redirected to Accounts screen
        When A user click User profile button
        And A user click logout button
        Then the screen is redirected to logout screen
   

    Scenario: Sigin into created account
        When A user clicks on Sigin header Button
        And A user enters the Signin emailaddress
        And A user enters the Signinpassword
        And A user clicks on the  Sigin button
        Then the screen is redirected to Home screen
        