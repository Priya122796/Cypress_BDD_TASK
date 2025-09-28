Cypress.Commands.add('loginToParaBank', (username, password) => {
  cy.log(`Attempting login with username: ${username}`);
  cy.visit('/index.htm?ConnType=JDBC');
  
  cy.intercept('POST', '**/login**').as('loginRequest');
  
  cy.get('input[name="username"]').clear().type(username);
  cy.get('input[name="password"]').clear().type(password);
  cy.get('input[value="Log In"]').click();
  
  cy.wait('@loginRequest').then((interception) => {
    cy.log('Login API Response Status:', interception.response.statusCode);
    expect(interception.response.statusCode).to.be.oneOf([200, 302]);
  });
});

Cypress.Commands.add('getAccountBalances', () => {
  cy.log('Retrieving account balances');
  
  const accounts = [];
  
  return cy.get('table#accountTable tbody tr').each(($row, index) => {
    const accountNumber = $row.find('td:first-child a').text().trim();
    const accountType = $row.find('td:nth-child(2)').text().trim();
    const balance = $row.find('td:last-child').text().trim();
    
    accounts.push({
      accountNumber,
      accountType,
      balance,
      index: index + 1
    });
  }).then(() => {
  
    cy.log('========== ACCOUNT DETAILS REPORT ==========');
    accounts.forEach((account, index) => {
      const balance = parseFloat(account.balance.replace(/[$,]/g, ''));
      cy.log(`Account ${index + 1}: ${account.accountNumber} - ${account.balance}`);
    });
    cy.log('========== END REPORT ==========');
    
    return cy.wrap(accounts);
  });
});