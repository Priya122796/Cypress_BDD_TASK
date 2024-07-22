import {Given, When, Then, BeforeAll} from "@badeball/cypress-cucumber-preprocessor";

import createAccount from  "../../pages/CreateAccount";


let userData;
BeforeAll(()=>{
    cy.generateFakerData();
      })
Given("A user Creates a new Account and Signin again in Luna website", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
   // userData=cy.generateFakerData();
    cy.fixture('fakerdata.json')
				.then((data) => {
					userData = data
                })
  })

  When("A user clicks on the Create an Account button", () => {
    createAccount.clickHeaderCreateAccount();
  });
  When("A user enters the firstname", () => {
    
    createAccount.typeFirstname(userData.firstName);
  });

  When("A user enters the lastname", () => {
    createAccount.typeLastname(userData.lastName);
  });

  When("A user enters the emailaddress", () => {
    createAccount.typeEmail(userData.email);
  });

  When("A user enters the mainpassword", () => {
    createAccount.typePassword(userData.password);
  });

  When("A user enters the confirmation", () => {
    createAccount.typeConfirmpassword(userData.password);
  });

  When("A user clicks on the submit button", () => {
    createAccount.clickCreateAccount();
  });

  Then("the url is redirected to Accounts screen", () => {
    cy.url().should("contains", "https://magento.softwaretestingboard.com/customer/account/");
  });

  When("A user click User profile button", () => {
    createAccount.clickUserprofileButton();
  });
  When("A user click logout button", () => {
    createAccount.clickLogout();
  });

  Then("the screen is redirected to logout screen", () => {
    cy.url().should("contains", "https://magento.softwaretestingboard.com/customer/account/logoutSuccess/");
  });

  

  When("A user clicks on Sigin header Button", () => {
    createAccount.clickHeaderSignIn();
  });

  When("A user enters the Signin emailaddress", () => {
    createAccount.typeSigninEmail(userData.email);
  });

  When("A user enters the Signinpassword", () => {
    createAccount.typeSigninPassword(userData.password);
  });
  When("A user clicks on the  Sigin button", () => {
    createAccount.clickSignInButton();
  });


  Then("the screen is redirected to Home screen", () => {
    cy.url().should("contains", "https://magento.softwaretestingboard.com/");
    cy.get('.panel.wrapper > .panel').contains(userData.firstName)
  });

  
 
 
