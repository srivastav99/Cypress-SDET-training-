const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //For generating html reports
  e2e: {
    watchForFileChanges : false, //If we remove this or keep it as true every time we make a change and save our file the cypress will automatially execute the testcase
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true
      require('cypress-mochawesome-reporter/plugin')(on);//for html report
    },
  },

  video: false, //for taking video automatically when a test fails when run on CLI(terminal, cmd)

});

