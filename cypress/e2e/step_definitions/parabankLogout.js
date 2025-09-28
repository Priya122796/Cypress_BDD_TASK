import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { ParaBankDashboardPage } from '../pages/ParaBankDashboardPage';
import { ParaBankLoginPage } from '../pages/ParaBankLoginPage';

const dashboardPage = new ParaBankDashboardPage();
const loginPage = new ParaBankLoginPage();

When('I click logout button', () => {
  cy.log('Clicking logout button');
  dashboardPage.clickLogout();
});

Then('I should be redirected to login page', () => {
  cy.log('Validating redirect to login page');
  cy.url().should('include', 'index.htm');
});

Then('I should see login form', () => {
  cy.log('Validating login form is displayed');
  loginPage.elements.usernameInput().should('be.visible');
  loginPage.elements.passwordInput().should('be.visible');
  loginPage.elements.loginButton().should('be.visible');
});

Then('session should be terminated', () => {
  cy.log('Validating session termination');
  cy.getCookies().should('not.be.empty');
});

When('I try to access accounts overview directly', () => {
  cy.log('Attempting to access protected page but unhandled error is displayed');
  cy.visit('/overview.htm');
});

Then('I should not see account information', () => {
  cy.log('Validating no account information is displayed');
  cy.get('body').should('not.contain', 'Account Number');
});