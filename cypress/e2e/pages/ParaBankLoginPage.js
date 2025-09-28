export class ParaBankLoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('input[value="Log In"]'),
    errorMessage: () => cy.get('.error'),
    registerLink: () => cy.get('a[href*="register"]')
  };

  enterUsername(username) {
    cy.log(`Entering username: ${username}`);
    this.elements.usernameInput().clear().type(username);
  }

  enterPassword(password) {
    cy.log('Entering password');
    this.elements.passwordInput().clear().type(password);
  }

  clickLoginButton() {
    cy.log('Clicking login button');
    this.elements.loginButton().click();
  }

  getErrorMessage() {
    return this.elements.errorMessage();
  }

  validateLoginAPI() {
    cy.log('Validating login API response');
    cy.wait('@loginRequest').then((interception) => {
      cy.log(`Login API Status: ${interception.response.statusCode}`);
      expect(interception.response.statusCode).to.be.oneOf([200, 302]);
    });
  }
}