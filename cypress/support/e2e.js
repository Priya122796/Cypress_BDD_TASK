// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './cmdFaker'
import '@shelex/cypress-allure-plugin';

require('cypress-terminal-report/src/installLogsCollector')({
  xhr: {
    // printHeaderData: true,
    printRequestData: true
  },
  // enableExtendedCollector: true,
  collectTypes: ['cons:log', 'cons:warn', 'cons:error', 'cy:xhr', 'cy:request', 'cy:intercept', 'cy:command']
});
