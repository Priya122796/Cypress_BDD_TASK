class Luna {
    elements = {
      firstNameInput: () => cy.get("#firstname"),
      lastNameInput: () => cy.get("#lastname"),
      passwordInput: () => cy.get("#password"),
      emailAddressInput: () => cy.get("#email_address"),
      confirmPasswordInput: () => cy.get('#password-confirmation'),
      HeadercreateBtn: () => cy.get(' ul.header>li').contains('Create an Account').first(),
      createBtn:()=>cy.get('div>button').contains('Create an Account'),
      UserProfileeBtn:()=> cy.get('button.action.switch[data-action="customer-menu-toggle"]').first(),
      clicklogoutBtn:()=>cy.contains('Sign Out '),
      clickSigninHeaderBtn:()=>cy.get(' ul.header>li.authorization-link > a').contains('Sign In').first(),
      clickSignBtn:()=>cy.get('#send2'),
      signinPasswordInput:()=>cy.get("#pass"),
      signinEmailInput:()=>cy.get("#email"),
    };
  
    clickHeaderCreateAccount() {
      this.elements.HeadercreateBtn().click();
    }

    typeFirstname(firstname) {
      this.elements.firstNameInput().type(firstname);
    }
  
    typeLastname(lastname) {
        this.elements.lastNameInput().type(lastname);
    }

    typeEmail(email) {
        this.elements.emailAddressInput().type(email);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    typeConfirmpassword(confirm_password) {
        this.elements.confirmPasswordInput().type(confirm_password);
    }
   
  
    clickCreateAccount() {
      this.elements.createBtn().click();
    }

    clickLogout(){
      this.elements.clicklogoutBtn().click();
    }
    clickUserprofileButton(){
      cy.wait(2000)
      this.elements.UserProfileeBtn().click();
    }
    clickHeaderSignIn(){
      this.elements.clickSigninHeaderBtn().click();
    }
    clickSignInButton(){
      this.elements.clickSignBtn().click();
    }
    
    typeSigninEmail(email){
      this.elements.signinEmailInput().type(email);

    }
    typeSigninPassword(password){
      this.elements.signinPasswordInput().type(password);

    }

 

  }
  
  module.exports = new Luna();
  