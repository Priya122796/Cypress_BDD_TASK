export class ParaBankDashboardPage {
  elements = {
    welcomeMessage: () => cy.get('.smallText').first(),
    accountsOverviewLink: () => cy.get('a[href*="overview"]'),
    transferFundsLink: () => cy.get('a[href*="transfer"]'),
    billPayLink: () => cy.get('a[href*="billpay"]'),
    logoutLink: () => cy.get('a[href*="logout"]'),
    accountsTable: () => cy.get('table#accountTable')
  };

  getWelcomeMessage() {
    return this.elements.welcomeMessage();
  }

  clickAccountsOverview() {
    cy.log('Navigating to Accounts Overview');
    this.elements.accountsOverviewLink().click();
  }

  clickLogout() {
    cy.log('Logging out');
    this.elements.logoutLink().click();
  }

  getAccountsTable() {
    return this.elements.accountsTable();
  }

  validateUserLoggedIn(expectedUsername) {
    cy.log(`Validating user ${expectedUsername} is logged in`);
    this.getWelcomeMessage().should('contain', expectedUsername);
  }
}