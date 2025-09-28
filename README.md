Cypress BDD Testing Framework for ParaBank
Overview
This project is a comprehensive end-to-end testing framework built with Cypress and Cucumber BDD for testing the ParaBank web application. The framework demonstrates modern testing practices including behavior-driven development, page object model design pattern, and advanced reporting capabilities.
Technology Stack

Cypress 13.10.0 - Modern end-to-end testing framework
Cucumber BDD @badeball/cypress-cucumber-preprocessor - Gherkin syntax for readable test scenarios
JavaScript ES6+ - Programming language
Allure Reports @shelex/cypress-allure-plugin - Advanced test reporting and analytics
Cucumber HTML Reports multiple-cucumber-html-reporter - Standard BDD reporting
Page Object Model - Design pattern for maintainable tests
Faker.js - Test data generation

Project Structure
cypress-bdd-TASK/
├── cypress/
│   ├── e2e/
│   │   ├── features/           # BDD feature files in Gherkin syntax
│   │   │   ├── parabankLogin.feature
│   │   │   ├── parabankAccounts.feature
│   │   │   └── parabankLogout.feature
│   │   ├── pages/              # Page Object Model classes
│   │   │   ├── ParaBankLoginPage.js
│   │   │   ├── ParaBankDashboardPage.js
│   │   │   └── ParaBankAccountsPage.js
│   │   ├── step_definitions/   # Cucumber step implementations
│   │   │   ├── parabankLogin.js
│   │   │   ├── parabankAccounts.js
│   │   │   └── parabankLogout.js
│   │   └── fixtures/           # Test data files
│   │       └── parabankdata.json
│   ├── support/               # Cypress configuration and custom commands
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── screenshots/          # Test execution screenshots
│   └── videos/              # Test execution recordings
├── allure-results/          # Raw Allure test results
├── allure-report/          # Generated Allure HTML reports
├── reports/               # Cucumber HTML reports
├── cypress.config.js     # Cypress configuration
├── cucumber-html-report.js  # Report generation script
├── .cypress-cucumber-preprocessorrc.json  # Cucumber configuration
└── package.json          # Dependencies and npm scripts
Features
Test Coverage

Login Functionality - Valid/invalid credentials, form validation
Account Management - Balance extraction, total calculation, account overview
Logout Security - Session termination, protected page access validation
Navigation Testing - User journey validation across application

Framework Capabilities

BDD Implementation - Gherkin scenarios for business-readable tests
Page Object Pattern - Maintainable and reusable page interactions
Cross-browser Testing - Chrome, Firefox, Edge support
Dual Reporting - Allure and Cucumber HTML reports
Screenshot Capture - Automatic screenshots on test failures
Video Recording - Full test execution recordings
Custom Commands - Reusable Cypress commands for common actions
Tag-based Execution - Run specific test categories (@smoke, @negative, @security)

Installation & Setup
Prerequisites

Node.js (version 16 or higher)
npm package manager

Installation Steps
bash# Clone the repository
git clone <repository-url>
cd cypress-bdd-TASK

# Install dependencies
npm install

# Verify Cypress installation
npx cypress verify
Running Tests
Basic Test Execution
bash# Run all tests in headed mode (browser visible)
npm run test:parabank

# Run tests with Allure reporting
npm run test:parabank:allure

# Run smoke tests only
npm run test:smoke:allure

# Open Cypress Test Runner for interactive testing
npm run cy:open
Report Generation
bash# Generate and view Allure report
npm run test:allure:report

# Generate Cucumber HTML report
npm run test:cucumber

# Clear all previous reports
npm run reports:clear
Test Scenarios
Login Feature
gherkin@smoke @login @parabank
Scenario: Successful login with valid credentials
  Given I navigate to ParaBank application
  When I enter username "Nifaanya Priya" and password "Nifanaya_Incu"
  And I click the login button
  Then I should see login API is successful
  And I should see welcome message with username "Nifaanya Priya"
  And I should be redirected to dashboard page
Accounts Feature
gherkin@smoke @accounts @parabank
Scenario: Get all accounts and total amount
  Given I navigate to ParaBank application
  And I login with valid credentials
  When I click on Accounts Overview
  Then I should get all account balances
  And I should calculate total amount
  And I should log the results
Page Object Example
javascriptexport class ParaBankAccountsPage {
  elements = {
    accountsTable: () => cy.get('table#accountTable'),
    accountRows: () => cy.get('table#accountTable tbody tr'),
    balanceCells: () => cy.get('table#accountTable tbody tr td:last-child')
  };

  getAllAccountBalances() {
    const balances = [];
    return this.elements.balanceCells().each(($balance) => {
      const amount = $balance.text().trim();
      balances.push(amount);
      cy.log(`Found balance: ${amount}`);
    }).then(() => balances);
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
}
Configuration
Cypress Configuration
javascript// cypress.config.js
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    env: {
      allureReuseAfterSpec: true,
      allure: true
    }
  }
});
Test Data
json{
  "validCredentials": {
    "username": "Nifaanya Priya",
    "password": "Nifanaya_Incu"
  }
}
Reporting
Allure Reports

Rich visualizations with charts and graphs
Step-by-step execution details
Screenshot attachments for failures
Historical test trends and analytics
Test categorization (Epic, Feature, Story)

Cucumber HTML Reports

BDD-focused reporting format
Feature and scenario-level results
Step execution details
Embedded screenshots

Best Practices Implemented
Code Organization

Separation of Concerns - Page objects, step definitions, and test data are properly separated
Reusable Components - Custom commands for common operations
Clean Code - Descriptive naming conventions and clear structure

Test Design

Independent Tests - Each test can run in isolation
Data-driven Testing - External test data files for maintainability
Comprehensive Assertions - Multiple validation points per test

Maintenance Strategy

Modular Architecture - Easy to extend and modify
Documentation - Clear README and code comments
Version Control Ready - Proper .gitignore and project structure

Test Case Coverage
Test CaseDescriptionStatusTC01Verify successful login with valid credentials✅ PassTC02Verify login behavior with invalid credentials✅ PassTC03Verify login form validation with empty credentials✅ PassTC04Verify account balances retrieval and calculation✅ PassTC05Verify successful logout functionality✅ PassTC06Verify security after logout - protected page access✅ Pass
Troubleshooting
Common Issues

Timeout Errors: Increase defaultCommandTimeout in cypress.config.js
Element Not Found: Verify selectors in page object files
Report Generation Fails: Ensure allure-commandline is properly installed

Debug Commands
bash# Run with debug mode
npx cypress run --headed --no-exit

# View detailed logs
npx cypress run --env DEBUG=true
Future Enhancements

API testing integration with cy.request()
Database validation capabilities
CI/CD pipeline integration (Jenkins, GitHub Actions)
Mobile testing with Cypress mobile commands
Performance testing integration

Contributing

Follow the existing code structure
Add appropriate test tags (@smoke, @regression, etc.)
Update documentation for new features
Ensure all tests pass before committing

Author
Nifaanya - Test Automation Engineer
License
This project is for educational and demonstration purposes.

This framework demonstrates modern test automation practices using Cypress, Cucumber BDD, and professional reporting tools suitable for enterprise-level testing environments.