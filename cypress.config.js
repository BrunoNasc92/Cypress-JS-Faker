const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    viewportWidth: 1400,
    viewportHeight: 900,
    //baseUrl : ""
   

  }
})