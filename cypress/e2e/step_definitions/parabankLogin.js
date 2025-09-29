import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { ParaBankLoginPage } from '../pages/ParaBankLoginPage';
import { ParaBankDashboardPage } from '../pages/ParaBankDashboardPage';

const loginPage = new ParaBankLoginPage();
const dashboardPage = new ParaBankDashboardPage();

Given('I navigate to ParaBank application', () => {
    cy.allure().epic('ParaBank Testing');
  cy.allure().feature('Account Management');
  cy.allure().story('View Account Balances');
  
  cy.log('Navigating to ParaBank application');
  cy.visit('/index.htm?ConnType=JDBC');
});

When('I enter username {string} and password {string}', (username, password) => {
  cy.log(`Entering credentials for user: ${username}`);
  cy.intercept('POST', '**/login**').as('loginRequest');
  
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
});

Then('I click the login button', () => {
  cy.log('Clicking login button');
  loginPage.clickLoginButton();
});

Then('I should see login API is successful', () => {
  cy.log('Validating login API response');
  loginPage.validateLoginAPI();
});

Then('I should see welcome message with username {string}', (expectedUsername) => {
  cy.log(`Validating welcome message for user: ${expectedUsername}`);
  dashboardPage.validateUserLoggedIn(expectedUsername);
});

Then('I should be redirected to dashboard page', () => {
  cy.log('Validating redirect to dashboard');
  cy.url().should('include', 'overview');
  dashboardPage.getAccountsTable().should('be.visible');
});

When('I click the login button without entering credentials', () => {
  cy.log('Attempting login without credentials');
  loginPage.clickLoginButton();
});

Then('I should see an error message', () => {
  cy.log('Validating error message display');
  loginPage.getErrorMessage().should('be.visible');
});

Then('I should see validation errors', () => {
  cy.log('Validating form validation errors');
  cy.url().should('include', 'login');
});

Then('I should remain on login page', () => {
  cy.log('Validating user remains on login page');
  cy.url().should('include', 'login');
});

Given('I login with valid credentials', () => {
  cy.fixture('parabankdata').then((data) => {
    cy.loginToParaBank(data.validCredentials.username, data.validCredentials.password);
  });
});