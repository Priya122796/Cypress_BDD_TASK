import { ParaBankDashboardPage } from '../pages/ParaBankDashboardPage';
import { ParaBankAccountsPage } from '../pages/ParaBankAccountsPage';

const dashboardPage = new ParaBankDashboardPage();
const accountsPage = new ParaBankAccountsPage();

let accountBalances = [];
let totalAmount = 0;



When('I click on Accounts Overview', () => {
  cy.log('Clicking on Accounts Overview');
  dashboardPage.clickAccountsOverview();
});

Then('I should get all account balances', () => {
  accountsPage.validateAccountsDisplayed();
  accountsPage.getAllAccountBalances().then((balances) => {
    accountBalances = balances;
    cy.log(`Retrieved ${balances.length} account balances`);
  });
});

Then('I should calculate total amount', () => {
  totalAmount = accountsPage.calculateTotalAmount(accountBalances);
  cy.log(`Calculated total: $${totalAmount.toFixed(2)}`);
});

Then('I should log the results', () => {
  accountsPage.logAccountResults(accountBalances, totalAmount);
});