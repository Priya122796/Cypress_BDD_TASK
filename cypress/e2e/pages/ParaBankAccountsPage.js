export class ParaBankAccountsPage {
  elements = {
    accountsTable: () => cy.get('table#accountTable'),
    accountRows: () => cy.get('table#accountTable tbody tr'),
    balanceCells: () => cy.get('table#accountTable tbody tr td:last-child')
  };

  validateAccountsDisplayed() {
    cy.log('Validating accounts are displayed');
    this.elements.accountsTable().should('be.visible');
    this.elements.accountRows().should('have.length.greaterThan', 0);
  }

  getAllAccountBalances() {
    cy.log('Getting all account balances');
    const balances = [];
    
    return this.elements.balanceCells().each(($balance) => {
      const amount = $balance.text().trim();
      balances.push(amount);
      cy.log(`Found balance: ${amount}`);
    }).then(() => {
      return balances;
    });
  }

  calculateTotalAmount(balances) {
    let total = 0;
    balances.forEach(balance => {
      const number = parseFloat(balance.replace(/[$,]/g, ''));
      if (!isNaN(number)) {
        total += number;
      }
    });
    return total;
  }

  logAccountResults(balances, total) {
    cy.log('========== PARABANK ACCOUNTS REPORT ==========');
    balances.forEach((balance, index) => {
      cy.log(`Account ${index + 1}: ${balance}`);
    });
    cy.log(`Total Amount: $${total.toFixed(2)}`);
    cy.log(`Number of Accounts: ${balances.length}`);
    cy.log('=============================================');
  }
}