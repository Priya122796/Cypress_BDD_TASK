const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
  
    env: {
      allureReuseAfterSpec: true,
      allure: true,
      allureResultsPath: 'allure-results',
    },
    
    async setupNodeEvents(on, config) {
      const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      
      const allureWriter = require('@shelex/cypress-allure-plugin/writer');
      allureWriter(on, config);
      
      const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
      const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
       const options = {
        //   printLogsToConsole: "always",
        printLogsToFile: "always",
        outputRoot: config.projectRoot,
        outputTarget: {
          'ExecutionLog.txt': 'txt',
          'ExecutionLog.json': 'json',
        }
      };
      require('cypress-terminal-report/src/installLogsPrinter')(on, options);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      
      return config;
    },
    
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
  },
});